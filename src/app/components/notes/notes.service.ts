import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Note, NoteUpload } from './note';
import { TagsService } from './tags.service';
import { Tag } from './tag';
import { MatDialogRef } from '@angular/material';
import { NoteDialogComponent } from './note-dialog/note-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: AngularFireList<Note>;
  allNotes: AngularFireList<Note>;
  allNotesArray: Note[] = new Array<Note>();
  allTags: Tag[];
  noteCount: number = 0;
  increment: number = 2;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private tagsService: TagsService,
  ) {
    this.tagsService.getAllTags().valueChanges().subscribe(
      tags => this.allTags = tags
    )
  }

  updateNote(note: Note): void {
    let notesDb = this.db.list('notes');
    notesDb.update(note.id, note);
  }

  deleteNote(note: Note): void {
    this.allNotes.remove(note.id);
    this.storage.storage.refFromURL(note.url).delete();
  }

  private allNotesSource: BehaviorSubject<Note[]> = new BehaviorSubject([]);
  allNotesObservable: Observable<Note[]> = this.allNotesSource.asObservable();

  updateAllNotesEvent(notes: Note[]): void {
    this.allNotesSource.next(notes);
    this.allNotesArray = notes;
  }

  getAllNotes(): AngularFireList<Note> {
    this.allNotes = this.db.list('notes');
    return this.allNotes;
  }

  getNotesById(noteId: string): Observable<Note> {
    let noteObj = this.db.object(`notes/${noteId}`);
    const noteByIdSource: BehaviorSubject<Note> = new BehaviorSubject<Note>(new Note());
    const noteByIdObservable: Observable<Note> = noteByIdSource.asObservable();

    function updateNoteEvent(note: Note): void {
      noteByIdSource.next(note);
    }

    noteObj.valueChanges().subscribe(
      (note: Note) => {
        if (note && note.id)
          updateNoteEvent(note);
      }
    )

    return noteByIdObservable;
  }

  uploadNote(file: File, note: Note, dialogRef: MatDialogRef<NoteDialogComponent>): NoteUpload {
    const existingNote = this.allNotesArray.find(findNote => findNote.fileName === note.fileName);
    if (existingNote) {
      this.deleteNote(existingNote);
    }
    note.id = this.db.createPushId();
    note.path = `notes/${note.fileName}`;
    const noteTags = this.tagsService.getTagsByIds(note.tagIds);
    for (const tagObj of noteTags) {
      if (!this.allTags.find(tag => tag.name === tagObj.name)) {
        this.tagsService.saveNewTag(tagObj);
      }
    }
    if (!file) {
      const notesDb: AngularFireList<Object> = this.db.list('notes');
      notesDb.update(note.id, note);
      return;
    }
    note.fileName = file[0].name;
    const fileRef: AngularFireStorageReference = this.storage.ref(note.path);
    const task: AngularFireUploadTask = this.storage.upload(note.path, file[0]);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(
          url => {
            const notesDb: AngularFireList<Object> = this.db.list('notes');
            note.url = url;
            notesDb.update(note.id, note);
            noteUploadSource.next(url);
            dialogRef.close()
          }
        )
      })
    ).subscribe()

    const noteUploadSource = new BehaviorSubject('');
    const onUrlAvailable = noteUploadSource.asObservable();

    let upload = new Object as NoteUpload;
    upload.task = task;
    upload.note = note;
    upload.onUrlAvailable = onUrlAvailable;

    return upload;
  }
}
