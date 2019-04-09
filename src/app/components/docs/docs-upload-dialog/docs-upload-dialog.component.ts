import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DocsService } from '../docs.service';
import { Doc } from '../doc';

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
  doc: Doc = new Doc();
  docTitle: string;
  uploadFile: File;

  constructor(
    public dialogRef: MatDialogRef<DocsUploadDialogComponent>,
    public docsService: DocsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onInputFileChange(file: File) {
    // this.doc.fileName = this.parseFilename(file[0].name);
    this.doc.fileName = file[0].name;
    this.uploadFile = file
    this.docTitle = this.parseFilename(this.doc.fileName);
  }

  uploadDoc() {
    this.doc.title = this.docTitle;
    console.log(this.doc);
    this.docsService.uploadDoc(this.uploadFile, this.doc);
  }

  parseFilename(filename: string) {
    let returnValue = '';
    if (filename.includes('.')) {
      returnValue = filename.substring(0, filename.indexOf('.'));
    }

    returnValue = returnValue.replace(/([A-Z])/g, ' $1').trim()

    return returnValue;
  }

}
