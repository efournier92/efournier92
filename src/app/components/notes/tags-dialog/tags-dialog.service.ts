import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { TagsDialogComponent } from './tags-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TagsDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  public openDialog(): MatDialogRef<TagsDialogComponent, any> {
    const dialogRef = this.dialog.open(TagsDialogComponent, {
      width: '50%',
    });

    return dialogRef;
  }
}
