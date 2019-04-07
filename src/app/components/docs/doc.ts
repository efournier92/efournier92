import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";

export class Doc {
  id: string = '';
  fileName: string = '';
  dateAdded: Date;
  path: string = '';
  url: string = '';
  tags: string[] = ['all'];
}

export interface DocUpload {
  doc: Doc;
  task: AngularFireUploadTask;
  onUrlAvailable: Observable<string>;
}
