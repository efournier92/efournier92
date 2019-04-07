import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DocsUploadDialogComponent } from './docs-upload-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DocsUploadDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  public openDialog(header: string, message: string): MatDialogRef<DocsUploadDialogComponent, any> {
    const dialogRef = this.dialog.open(DocsUploadDialogComponent, {
      width: '50%',
      data: {
        header: header,
        message: message,
      },
    });

    return dialogRef;
  }
}
