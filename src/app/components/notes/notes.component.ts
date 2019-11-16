import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { NoteDialogService } from './note-dialog/note-dialog.service';
import { Note } from './note';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tag } from './tag';
import { TagsService } from './tags.service';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { TagsDialogService } from './tags-dialog/tags-dialog.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  user: User;
  allTags: Tag[];
  selectedTag: Tag = new Tag('');
  allNotes: Note[];
  filteredNotes: Note[] = new Array<Note>();
  selectedNote: Note;
  searchQuery: string = "";

  constructor(
    private authService: AuthService,
    private notesService: NotesService,
    private notesUploadDialog: NoteDialogService,
    private tagsDialog: TagsDialogService,
    private tagsService: TagsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscribeToNotes();
    this.authService.currentUserObservable.subscribe(
      (user: User) => this.user = user
    )
  }

  subscribeToNotes(): void {
    this.notesService.getAllNotes().valueChanges().subscribe(
      (notes: Note[]) => {
        this.allNotes = notes;
        this.subscribeToTags();
      }
    )
  }

  subscribeToTags(): void {
    this.tagsService.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        if (tags && tags.length === 0) {
          const tag = this.tagsService.createNewTag('All')
          tags.push(tag);
          this.tagsService.saveNewTag(tag)
        }
        this.allTags = tags;
        this.getRouteParams();
      }
    )
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe(
      (result: any) => {
        if (result.params.tagName) {
          const selectedTag = this.findSelectedTag(result.params.tagName);
          this.selectedTag = selectedTag ? selectedTag : this.findSelectedTag('all');
          this.filterNotesByTagName(this.selectedTag.name)
        } else {
          this.redirectTo('all');
        }
        if (result.params.fileName) {
          const selectedNote = this.findSelectedNote(result.params.fileName);
          this.selectedNote = selectedNote ? selectedNote : undefined;
        }
      }
    )
  }

  findSelectedTag(tagName: string): Tag {
    return this.allTags.find(
      (tag: Tag) => tag.name.toLowerCase() === tagName.toLowerCase(),
    )
  }

  findSelectedNote(fileName: string): Note {
    return this.allNotes.find(
      note => note.fileName.toLowerCase() === fileName.toLowerCase(),
    )
  }

  changeSelectedNote(fileName: string): void {
    this.selectedNote = this.allNotes.find(
      note => note.fileName === fileName,
    )
    this.selectedNote.tags = this.tagsService.populateTags(this.selectedNote.tags);
    this.redirectTo(this.selectedTag.name, this.selectedNote.title);
  }

  filterNotesByTagName(tagName: string): void {
    this.allTags.filter(
      (tag: Tag) => {
        if (tag.name === tagName) {
          this.selectedTag = tag;
        }
      }
    )
    if (!this.selectedTag) {
      this.redirectTo('all');
    } else {
      this.filteredNotes = [];
      for (const note of this.allNotes) {
        if (!note.tags)
          return;
        note.tags = this.tagsService.populateTags(note.tags);
        for (let tag of note.tags) {
          if (tag.name && tagName && tagName.toLowerCase() === tag.name.toLowerCase() && !this.filteredNotes.find(filterNote => filterNote.id === note.id)) {
            this.filteredNotes.push(note);
          }
        }
      }
    }
    this.filteredNotes.sort((noteA: Note, noteB: Note) => (noteA.title > noteB.title) ? 1 : -1)
  }

  searchNotesByName(searchQuery: string): void {
    if (!this.selectedTag) {
      this.redirectTo('all')
    } else {
      this.filteredNotes = this.allNotes.filter(
        (note: Note) => {
          let isRelevant = false;
          const fileName: string = note.fileName.toLowerCase();
          const title: string = note.title.toLowerCase();
          const query: string = searchQuery.toLowerCase();
          const noteTags = this.tagsService.getTagsByIds(note.tagIds);
          if (fileName.includes(query) || title.includes(query))
            isRelevant = true;
          note.tags = this.tagsService.populateTags(note.tags);
          for (const tag of note.tags) {
            const tagName = tag.name.toLowerCase();
            if (tagName.includes(query))
              isRelevant = true;
          }
          return isRelevant;
        }
      )
    }
  }

  redirectTo(tagName: string, noteName?: string): void {
    if (!noteName) {
      this.router.navigateByUrl(`notes/${tagName}`);
    } else {
      this.router.navigateByUrl(`notes/${tagName}/${noteName}`);
    }
  }

  changeTag(tag: Tag) {
    this.redirectTo(tag.name);
  }

  openNoteDialog(mode: string): void {
    const dialogRef = this.notesUploadDialog.openDialog(mode, this.selectedNote);
    dialogRef.afterClosed().subscribe(
      (confirmedAction: boolean) => {
        if (confirmedAction) {

        }
      }
    )
  }

  openTagsDialog(): void {
    this.tagsDialog.openDialog();
  }

  getTagName(tagId: string): string {
    const tag = this.allTags.find(
      (tag: Tag) => {
        return tag.id === tagId
      }
    )
    return tag.name;
  }
}
