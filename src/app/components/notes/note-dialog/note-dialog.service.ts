import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { NoteDialogComponent } from './note-dialog.component';
import { Note } from '../note';

class DialogData extends MatDialogConfig {
  mode: string;
  note: Note;
}

@Injectable({
  providedIn: 'root'
})
export class NoteDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  public openDialog(mode: string, note: Note): MatDialogRef<NoteDialogComponent, any> {
    let dialogData: DialogData = new DialogData();
    dialogData.mode = mode;
    dialogData.note = note;
    dialogData.autoFocus = false;
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      width: '50%',
      data: dialogData,
    });

    return dialogRef;
  }
}
