import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TagsService } from '../tags.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-tags-edit',
  templateUrl: './tags-edit.component.html',
  styleUrls: ['./tags-edit.component.scss']
})
export class TagsEditComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  tags: Tag[] = [];
  allTags: Tag[] = [];

  @ViewChild('tagInput')
  tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete: MatAutocomplete;
  filteredTags: Observable<Tag[]>;

  constructor(
    private tagsService: TagsService
  ) { }

  ngOnInit() {
    this.subscribeToTags()
  }

  subscribeToTags() {
    this.tagsService.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        this.allTags = tags;
      }
    )
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value.trim();

    if ((value)) {
      let tag = new Tag(value);
      if (!this.allTags.find(tag => tag.name === value)) {
        this.tagsService.createNewTag(value);
      } else {
        tag = this.allTags.find(tag => tag.name === value);
      }
      this.tags.push(tag);
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tagName: string): void {
    this.tags = this.tags.filter(tag => tag.name !== tagName);
    //   (tag: Tag) => {
    //     if (tag.name === tagName) {

    //     }
    //   }
    // )
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let tag = this.allTags.find(tag => tag.name === event.option.viewValue);
    this.tags.push(tag);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): Tag[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
