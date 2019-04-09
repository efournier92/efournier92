import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Doc, DocUpload } from './doc';
import { TagsService } from './tags.service';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class DocsService {
  docs: AngularFireList<Doc>;
  allDocs: AngularFireList<Doc>;
  docCount: number = 0;
  increment: number = 2;
  allTags: Tag[];

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private tagsService: TagsService,
  ) {
    this.getAllDocs().valueChanges().subscribe(
      (docs: Doc[]) => {
        this.updateAllDocsEvent(docs);
      }
    );
    this.tagsService.getAllTags().valueChanges().subscribe(
      tags => this.allTags = tags
    )
  }

  updateDoc(doc: Doc): void {
    let docsDb = this.db.list('docs');
    docsDb.update(doc.id, doc);
  }

  deleteDoc(doc: Doc): void {
    this.allDocs.remove(doc.id);
    this.storage.storage.refFromURL(doc.url).delete();
  }

  private allDocsSource: BehaviorSubject<Doc[]> = new BehaviorSubject([]);
  allDocsObservable: Observable<Doc[]> = this.allDocsSource.asObservable();

  updateAllDocsEvent(doc: Doc[]): void {
    this.allDocsSource.next(doc);
  }

  getAllDocs(): AngularFireList<Doc> {
    this.allDocs = this.db.list('docs');
    return this.allDocs;
  }

  getDocsById(docId: string): Observable<Doc> {
    let docObj = this.db.object(`docs/${docId}`);
    const docByIdSource: BehaviorSubject<Doc> = new BehaviorSubject<Doc>(new Doc());
    const docByIdObservable: Observable<Doc> = docByIdSource.asObservable();

    function updateDocEvent(doc: Doc): void {
      docByIdSource.next(doc);
    }
    docObj.valueChanges().subscribe(
      (doc: Doc) => {
        if (doc && doc.id)
          updateDocEvent(doc);
      }
    )
    return docByIdObservable;
  }

  uploadDoc(file: File, doc: Doc): DocUpload {
    doc.id = this.db.createPushId();
    doc.dateAdded = new Date();
    doc.fileName = file[0].name;
    doc.path = `docs/${doc.fileName}`;
    doc.tags.forEach(
      x => 
    )
    doc.tags.push('windows');

    const fileRef: AngularFireStorageReference = this.storage.ref(doc.path);
    const task: AngularFireUploadTask = this.storage.upload(doc.path, file[0]);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(
          url => {
            const docsDb: AngularFireList<Object> = this.db.list('docs');
            doc.url = url;
            docsDb.update(doc.id, doc);
            docUploadSource.next(url);
          }
        )
      })
    ).subscribe()

    const docUploadSource = new BehaviorSubject('');
    const onUrlAvailable = docUploadSource.asObservable();

    let upload = new Object as DocUpload;
    upload.task = task;
    upload.doc = doc;
    upload.onUrlAvailable = onUrlAvailable;

    return upload;
  }

  getYears(): Array<Number> {
    let thisYear: number = new Date().getFullYear()
    let years: Array<Number> = Array<Number>();
    for (let i = 1800; i <= thisYear; i++) {
      years.push(i);
    }
    return years;
  }
}
