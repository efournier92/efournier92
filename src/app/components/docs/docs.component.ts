import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';
import { DocDialogService } from './doc-dialog/doc-dialog.service';
import { Doc } from './doc';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tag } from './tag';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  allTags: Tag[];
  selectedTag: Tag;
  allDocs: Doc[];
  filteredDocs: Doc[] = new Array<Doc>();
  selectedDoc: Doc;
  searchQuery: string = "";

  constructor(
    private docsService: DocsService,
    private docsUploadDialog: DocDialogService,
    private tagsService: TagsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscribeToDocs();
    this.subscribeToTags();
  }

  subscribeToDocs(): void {
    this.docsService.getAllDocs().valueChanges().subscribe(
      (docs: Doc[]) => {
        this.allDocs = docs;
        this.getRouteParams();
      }
    )
  }

  subscribeToTags(): void {
    this.tagsService.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        this.allTags = tags;
      }
    )
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe(
      (result: any) => {
        if (!result.params.tagName) {
          this.redirectTo('all')
        } else {
          const selectedTag = this.findSelectedTag(result.params.tagName);
          this.selectedTag = selectedTag ? selectedTag : this.findSelectedTag('all');
        }
        this.filterDocsByTagName(this.selectedTag.name);
        if (!result.params.fileName) {
          this.redirectTo(this.selectedTag.name);
        } else {
          const selectedDoc = this.findSelectedDoc(result.params.fileName);
          this.selectedDoc = selectedDoc ? selectedDoc : undefined;
          if (!this.selectedDoc) {
            this.redirectTo(this.selectedTag.name);
          } else {
            this.changeSelectedDoc(this.selectedDoc.fileName);
          }
        }
      }
    )
  }

  findSelectedTag(tagName: string): Tag {
    return this.allTags.find(
      (tag: Tag) => tag.name === tagName,
    )
  }

  findSelectedDoc(fileName: string): Doc {
    return this.allDocs.find(
      doc => doc.fileName === fileName,
    )
  }

  changeSelectedDoc(fileName: string): void {
    this.selectedDoc = this.allDocs.find(
      doc => doc.fileName === fileName,
    )
    this.redirectTo(this.selectedTag.name, this.selectedDoc.fileName)
  }

  filterDocsByTagName(tagName: string): void {
    this.allTags.filter(
      (tag: Tag) => {
        if (tag.name === tagName) {
          this.selectedTag = tag;
        }
      }
    )
    if (!this.selectedTag) {
      this.redirectTo('all');
    } else {
      this.filteredDocs = [];
      for (const doc of this.allDocs) {
        if (!doc.tags) return;
        for (const tag of doc.tags) {
          if (tag.name && tagName && tagName.toLowerCase() === tagName.toLowerCase()) {
            this.filteredDocs.push(doc);
          }
        }
      }
    }
  }

  searchDocsByName(searchQuery: string): void {
    if (!this.selectedTag) {
      this.redirectTo('all')
    } else {
      this.filteredDocs = this.allDocs.filter(
        (doc: Doc) => {
          const fileName: string = doc.fileName.toLowerCase();
          const query: string = searchQuery.toLowerCase();
          return fileName.includes(query)
        }
      )
    }
  }

  redirectTo(tagName: string, docName?: string): void {
    if (!docName) {
      this.router.navigateByUrl(`docs/${tagName}`);
    } else {
      this.router.navigateByUrl(`docs/${tagName}/${docName}`);
    }
  }

  openDocDialog(mode: string): void {
    const dialogRef = this.docsUploadDialog.openDialog(mode, this.selectedDoc);
    dialogRef.afterClosed().subscribe(
      (confirmedAction: boolean) => {
        if (confirmedAction) {

        }
      }
    )
  }
}
