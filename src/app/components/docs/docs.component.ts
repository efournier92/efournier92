import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';
import { DocDialogService } from './doc-dialog/doc-dialog.service';
import { Doc } from './doc';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tag } from './tag';
import { TagsService } from './tags.service';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  user: User;
  allTags: Tag[];
  selectedTag: Tag = new Tag('');
  allDocs: Doc[];
  filteredDocs: Doc[] = new Array<Doc>();
  selectedDoc: Doc;
  searchQuery: string = "";

  constructor(
    private authService: AuthService,
    private docsService: DocsService,
    private docsUploadDialog: DocDialogService,
    private tagsService: TagsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscribeToDocs();
    this.authService.currentUserObservable.subscribe(
      (user: User) => this.user = user
    )
  }

  subscribeToDocs(): void {
    this.docsService.getAllDocs().valueChanges().subscribe(
      (docs: Doc[]) => {
        this.allDocs = docs;
        this.subscribeToTags();
      }
    )
  }

  subscribeToTags(): void {
    this.tagsService.getAllTags().valueChanges().subscribe(
      (tags: Tag[]) => {
        if (tags && tags.length === 0) {
          const tag = this.tagsService.createNewTag('All')
          this.tagsService.saveNewTag(tag)
        }
        this.allTags = tags;
        this.getRouteParams();
      }
    )
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe(
      (result: any) => {
        if (result.params.tagName) {
          const selectedTag = this.findSelectedTag(result.params.tagName);
          this.selectedTag = selectedTag ? selectedTag : this.findSelectedTag('all');
          this.filterDocsByTagName(this.selectedTag.name)
        } else {
          this.redirectTo('all');
        }
        if (result.params.fileName) {
          const selectedDoc = this.findSelectedDoc(result.params.fileName);
          this.selectedDoc = selectedDoc ? selectedDoc : undefined;
        }
      }
    )
  }
  //       if (!result.params.tagName) {
  //         this.redirectTo('all')
  //       } else {
  //         const selectedTag = this.findSelectedTag(result.params.tagName);
  //         this.selectedTag = selectedTag ? selectedTag : this.findSelectedTag('all');
  //       }
  //       if (!result.params.fileName) {
  //         this.redirectTo(this.selectedTag.name);
  //       } else {
  //         const selectedDoc = this.findSelectedDoc(result.params.fileName);
  //         this.selectedDoc = selectedDoc ? selectedDoc : undefined;
  //         if (!this.selectedDoc) {
  //           this.redirectTo(this.selectedTag.name);
  //         } else {
  //           this.changeSelectedDoc(this.selectedDoc.fileName);
  //         }
  //       }
  //     }
  //   )
  // }

  findSelectedTag(tagName: string): Tag {
    return this.allTags.find(
      (tag: Tag) => tag.name.toLowerCase() === tagName.toLowerCase(),
    )
  }

  findSelectedDoc(fileName: string): Doc {
    return this.allDocs.find(
      doc => doc.fileName.toLowerCase() === fileName.toLowerCase(),
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
          if (tag.name && tagName && tagName.toLowerCase() === tag.name.toLowerCase() && !this.filteredDocs.find(filterDoc => filterDoc.id === doc.id)) {
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

  changeTag(tag: Tag) {
    this.redirectTo(tag.name);
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
