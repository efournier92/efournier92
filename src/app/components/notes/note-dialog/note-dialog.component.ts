import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../notes.service';
import { Note } from '../note';
import { Tag } from '../tag';
import { TagsService } from '../tags.service';

export interface DialogData {
  mode: string;
  note: Note;
}

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {
  note: Note = new Note();
  uploadFile: File;
  isEditingNote: boolean = false;
  allTags: Tag[];

  constructor(
    public dialogRef: MatDialogRef<NoteDialogComponent>,
    public notesService: NotesService,
    public tagsService: TagsService,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
  ) { }

  ngOnInit(): void {
    if (this.dialogData.mode === 'edit') {
      this.note = this.dialogData.note;
      this.isEditingNote = true;
    }
    this.tagsService.getAllTags().valueChanges().subscribe(
      tags => this.allTags = tags
    )
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onInputFileChange(file: File) {
    this.note.fileName = file[0].name;
    this.uploadFile = file;
    this.note.title = this.parseFilename(this.note.fileName);
  }

  uploadNote() {
    this.notesService.uploadNote(this.uploadFile, this.note, this.dialogRef);
    this.closeDialog;
  }

  deleteNote() {
    this.notesService.deleteNote(this.note);
    this.closeDialog;
  }

  parseFilename(filename: string) {
    let returnValue = '';
    if (filename.includes('.')) {
      returnValue = filename.substring(0, filename.indexOf('.'));
    }
    returnValue = returnValue.replace(/([A-Z])/g, ' $1').trim()
    return returnValue;
  }

  onTagsChanged(noteTags: Tag[]) {
    let tagIds = [];
    for (const tag of noteTags) {
      tagIds.push(tag.id);
    }
    this.note.tagIds = tagIds;
  }
}
