import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-docs-dialog',
  templateUrl: './docs-edit-dialog.component.html',
  styleUrls: ['./docs-edit-dialog.component.scss']
})
export class DocsEditDialogComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    public dialogRef: MatDialogRef<DocsEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
