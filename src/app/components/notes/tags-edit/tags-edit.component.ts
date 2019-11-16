import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
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
  selectedTags: Tag[] = [];
  allTags: Tag[] = [];
  @ViewChild('tagInput')
  tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete: MatAutocomplete;
  filteredTags: Observable<Tag[]>;
  @Input()
  noteTags: Tag[];
  @Output()
  onTagsChangedEvent = new EventEmitter<Tag[]>();

  constructor(
    private tagsService: TagsService
  ) { }

  ngOnInit(): void {
    this.subscribeToTags();
  }

  subscribeToTags(): void {
    this.tagsService.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        this.allTags = tags;
        if (!this.noteTags || this.noteTags.length < 1) {
          const tag: Tag = this.allTags.find(t => t.name === "All");
          this.selectedTags.push(tag);
        } else {
          for (const tag of this.noteTags) {
            this.selectedTags.push(tag);
          }
        }
      }
    )
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const tagName = event.value.trim();

    if ((tagName)) {
      let tag = new Tag(tagName);
      if (!this.allTags.find(tag => tag.name === tagName)) {
        tag = this.tagsService.createNewTag(tagName);
      } else {
        tag = this.allTags.find(tag => tag.name === tagName);
      }
      this.selectedTags.push(tag);
      this.onTagsChanged(this.selectedTags);
    }

    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tagName: string): void {
    this.selectedTags = this.selectedTags.filter(tag => tag.name !== tagName);
  }

  dropdownSelected(event: MatAutocompleteSelectedEvent): void {
    let tag = this.allTags.find(tag => tag.name === event.option.viewValue);
    this.selectedTags.push(tag);
    this.onTagsChanged(this.selectedTags);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  onTagsChanged(selectedTags): void {
    this.onTagsChangedEvent.emit(selectedTags);
  }
}
