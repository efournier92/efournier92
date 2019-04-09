import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  allTags: AngularFireList<Tag>;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
  ) {
    this.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        this.updateAllDocsEvent(tags);
      }
    );
  }

  deleteTag(tag: Tag): void {
    this.allTags.remove(tag.id);
  }

  private allTagsSource: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  allTagsObservable: Observable<Tag[]> = this.allTagsSource.asObservable();

  updateAllDocsEvent(doc: Tag[]): void {
    this.allTagsSource.next(doc);
  }

  getAllTags(): AngularFireList<Tag> {
    this.allTags = this.db.list('tags');
    return this.allTags;
  }

  createNewTag(tagName: string): Tag {
    let tag = new Tag(tagName);
    tag.id = this.db.createPushId();
    return tag;
  }

  saveNewTag(tag): void {
    tag.dateAdded = new Date();
    this.allTags.update(tag.id, tag);
  }
}
