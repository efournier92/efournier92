import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DocsService } from '../docs.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-docs-dialog',
  templateUrl: './docs-upload-dialog.component.html',
  styleUrls: ['./docs-upload-dialog.component.scss']
})
export class DocsUploadDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DocsUploadDialogComponent>,
    public docsService: DocsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  uploadDoc(file: any) {
    this.docsService.uploadDoc(file);
  }

}
