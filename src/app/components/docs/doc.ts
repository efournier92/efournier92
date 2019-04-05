import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs";

export class Doc {
  id: string = '';
  fileName: string = '';
  dateAdded: Date;
  path: string = '';
  url: string = '';
}

export interface DocUpload {
  doc: Doc;
  task: AngularFireUploadTask;
  onUrlAvailable: Observable<string>;
}
