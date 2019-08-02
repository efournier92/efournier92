import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TagsService } from '../tags.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class TagsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TagsDialogComponent>,
    public tagsService: TagsService,
  ) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateTag(tag: Tag) {
    this.tagsService.updateTag(tag);
  }

  deleteTag(tag: Tag) {
    this.tagsService.deleteTag(tag);
  }
}
