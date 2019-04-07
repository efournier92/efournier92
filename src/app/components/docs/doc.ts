import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";

export class Doc {
  id: string = '';
  fileName: string = '';
  dateAdded: Date;
  path: string = '';
  url: string = '';
  tags: Tag[] = new Array<Tag>();
}

export class Tag {
  id: string;
  name: string;

  constructor(name: string) {
    this.id;
    this.name = name;
  }
}

export interface DocUpload {
  doc: Doc;
  task: AngularFireUploadTask;
  onUrlAvailable: Observable<string>;
}
