import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TagsService } from '../tags.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-tags-dialog',
  templateUrl: './tags-dialog.component.html',
  styleUrls: ['./tags-dialog.component.scss']
})
export class TagsDialogComponent implements OnInit {
  allTags: Tag[] = new Array<Tag>();
  newTagName: string;
  tagToEdit: Tag = new Tag('');

  constructor(
    public dialogRef: MatDialogRef<TagsDialogComponent>,
    public tagsService: TagsService,
  ) { }

  ngOnInit(): void {
    this.tagsService.allTagsObservable.subscribe(
      (tags: Tag[]) => this.allTags = tags
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTag(): void {
    const newTag = this.tagsService.createNewTag(this.newTagName);
    this.tagsService.saveNewTag(newTag);
    this.newTagName = '';
  }

  updateTag(tag: Tag): void {
    this.tagsService.updateTag(tag);
    this.tagToEdit = new Tag('');
  }

  editTag(tag: Tag) {
    this.tagToEdit = tag;
  }

  deleteTag(tag: Tag) {
    this.tagsService.deleteTag(tag);
    this.tagToEdit = new Tag('');
  }
}
