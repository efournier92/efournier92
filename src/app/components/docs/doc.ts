import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs";

export class Doc {
  id: string = '';
  title: string = '';
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
