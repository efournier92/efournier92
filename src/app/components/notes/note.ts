import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { Tag } from "./tag";

export class Note {
  id: string = '';
  title: string = '';
  fileName: string = '';
  date: Date;
  path: string = '';
  url: string = '';
  tags: Tag[] = new Array<Tag>();
  isHidden: boolean;
}

export interface NoteUpload {
  note: Note;
  task: AngularFireUploadTask;
  onUrlAvailable: Observable<string>;
}
