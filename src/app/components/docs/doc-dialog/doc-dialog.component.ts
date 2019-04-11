import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DocsService } from '../docs.service';
import { Doc } from '../doc';
import { Tag } from '../tag';

export interface DialogData {
  mode: string;
  doc: Doc;
}

@Component({
  selector: 'app-docs-dialog',
  templateUrl: './doc-dialog.component.html',
  styleUrls: ['./doc-dialog.component.scss']
})
export class DocDialogComponent implements OnInit {
  doc: Doc = new Doc();
  uploadFile: File;

  constructor(
    public dialogRef: MatDialogRef<DocDialogComponent>,
    public docsService: DocsService,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
  ) { }

  ngOnInit() {
    if (this.dialogData.mode === 'edit') {
      this.doc = this.dialogData.doc;
      // this.doc.date = new Date(this.doc.date);
    }
  }

  loadDocData(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onInputFileChange(file: File) {
    // this.doc.fileName = this.parseFilename(file[0].name);
    this.doc.fileName = file[0].name;
    this.uploadFile = file
    this.doc.title = this.parseFilename(this.doc.fileName);
  }

  uploadDoc() {
    this.doc.title = this.doc.title;
    this.docsService.uploadDoc(this.uploadFile, this.doc, this.dialogRef);
  }

  parseFilename(filename: string) {
    let returnValue = '';
    if (filename.includes('.')) {
      returnValue = filename.substring(0, filename.indexOf('.'));
    }

    returnValue = returnValue.replace(/([A-Z])/g, ' $1').trim()

    return returnValue;
  }

  onTagsChanged(docTags: Tag[]) {
    this.doc.tags = docTags;
  }

}