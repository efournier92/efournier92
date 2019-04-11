import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DocDialogComponent } from './doc-dialog.component';
import { Doc } from '../doc';

class DialogData extends MatDialogConfig {
  mode: string;
  doc: Doc;
}

@Injectable({
  providedIn: 'root'
})
export class DocDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  public openDialog(mode: string, doc: Doc): MatDialogRef<DocDialogComponent, any> {
    let dialogData: DialogData = new DialogData();
    dialogData.mode = mode;
    dialogData.doc = doc;
    dialogData.autoFocus = false;
    const dialogRef = this.dialog.open(DocDialogComponent, {
      width: '50%',
      data: dialogData,
    });

    return dialogRef;
  }
}
