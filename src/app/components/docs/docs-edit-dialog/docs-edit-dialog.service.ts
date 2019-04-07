import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DocsEditDialogComponent } from './docs-edit-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DocsEditDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  public openDialog(header: string, message: string): MatDialogRef<DocsEditDialogComponent, any> {
    const dialogRef = this.dialog.open(DocsEditDialogComponent, {
      width: '50%',
      data: {
        header: header,
        message: message,
      },
    });

    return dialogRef;
  }
}
