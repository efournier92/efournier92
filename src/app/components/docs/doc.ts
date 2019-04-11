import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { Tag } from "./tag";

export class Doc {
  id: string = '';
  title: string = '';
  fileName: string = '';
  date: Date;
  path: string = '';
  url: string = '';
  tags: Tag[] = new Array<Tag>();
}

export interface DocUpload {
  doc: Doc;
  task: AngularFireUploadTask;
  onUrlAvailable: Observable<string>;
}
