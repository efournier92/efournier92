import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  allTags: AngularFireList<Tag>;
  allTagsArray: Tag[];

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        if (tags || tags.length < 0)
          this.updateAllTagsEvent(tags);
        if (!tags.find(tag => tag.name === 'All')) {
          var newTag = this.createNewTag('All');
          this.saveNewTag(newTag);
        }
      }
    );
  }

  getTagName(tagId: string): any {
    let tagObj = this.db.object(`users/${tagId}`);
    tagObj.valueChanges().subscribe(
      (tag: Tag) => {
        return tag.name;
      }
    )
  }

  getTagsByIds(ids: string[]): Tag[] {
    let tags = [];
    for (const id in ids) {
      let tag = this.getTagById(id);
      tags.push(tag);
    }
    return tags;
  }

  getTagById(id: string): Tag {
    return this.allTagsArray.find(
      (tag: Tag) => {
        return tag.id === id;
      }
    )
  }

  deleteTag(tag: Tag): void {
    this.allTags.remove(tag.id);
  }

  private allTagsSource: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  allTagsObservable: Observable<Tag[]> = this.allTagsSource.asObservable();

  updateAllTagsEvent(tags: Tag[]): void {
    this.allTagsSource.next(tags);
    this.allTagsArray = tags
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

  saveNewTag(tag: Tag): void {
    tag.date = new Date();
    this.allTags.update(tag.id, tag);
  }

  updateTag(tag: Tag): void {
    this.allTags.update(tag.id, tag);
  }

  stripTags(tags: Tag[]): Tag[] {
    for (const tag of tags) {
      if (tag.name)
        delete tag.name;
      if (tag.date)
        delete tag.date;
    }
    return tags;
  }

  populateTags(tags: Tag[]): Tag[] {
    let outTags: Tag[] = new Array<Tag>();
    for (const noteTag of tags) {
      const fullTag = this.allTagsArray.find(tag => tag.id === noteTag.id);
      if (fullTag)
        outTags.push(fullTag);
    }
    return outTags;
  }
}
