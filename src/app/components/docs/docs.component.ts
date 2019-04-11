import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';
import { DocDialogService } from './doc-dialog/doc-dialog.service';
import { Doc } from './doc';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tag } from './tag';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  allTags: string[] = ["Windows", "Bash"];
  selectedTag: Tag = new Tag('');
  allDocs: Doc[];
  filteredDocs: Doc[] = new Array<Doc>();
  selectedDoc: Doc;
  searchQuery: string = "";

  constructor(
    private docsService: DocsService,
    private docsUploadDialog: DocDialogService,
    private router: Router,
    private route: ActivatedRoute,
    private markdownService: MarkdownService,
  ) { }

  ngOnInit() {
    this.subscribeToDocs();
    // this.markdownService.renderer.code = (text: string, level: string, escaped: boolean) => {
    //   const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    //   return '<h' + level + '>' +
    //     '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
    //     '<span class="header-link"></span>' +
    //     '</a>' + text +
    //     '</h' + level + '>';
    // };
  }

  subscribeToDocs() {
    this.docsService.getAllDocs().valueChanges().subscribe(
      (docs: Doc[]) => {
        this.allDocs = docs;
        this.getRouteParams();
      }
    )
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe(
      (result: any) => {
        this.selectedTag = new Tag(result.params.tagName);
        this.filterDocsByTag(this.selectedTag);
        if (result.params.fileName) {
          this.selectedDoc = this.allDocs.find(doc => doc.fileName === result.params.fileName);
          this.setActiveDoc(result.params.fileName);
        }
      }
    )
  }

  setActiveDoc(selectedDoc: string) {
    this.selectedDoc = this.allDocs.find(
      doc => doc.fileName === selectedDoc,
    )
  }

  changeSelectedDoc(fileName: string): void {
    this.selectedDoc = this.allDocs.find(
      doc => doc.fileName === fileName,
    )
    this.router.navigateByUrl(`docs/${this.selectedTag.name}/${fileName}`);
  }

  filterDocsByTag(tagObj: Tag) {
    this.selectedTag = tagObj;
    this.filteredDocs = [];
    for (const doc of this.allDocs) {
      if (!doc.tags) return;
      for (const tag of doc.tags) {
        if (tag.name && tagObj.name && tag.name.toLowerCase() === tagObj.name.toLowerCase()) {
          this.filteredDocs.push(doc);
        }
      }
    }
  }

  searchDocsByName(searchQuery: string) {
    this.selectedTag.name = 'all';
    this.filteredDocs = this.allDocs.filter(
      (doc: Doc) => {
        const fileName: string = doc.fileName.toLowerCase();
        const query: string = searchQuery.toLowerCase();
        return fileName.includes(query)
      }
    )
  }

  redirectToTag(): void {
    this.router.navigateByUrl(`docs/${this.selectedTag.name}`);
  }

  openDocDialog(mode: string) {
    const dialogRef = this.docsUploadDialog.openDialog(mode, this.selectedDoc);
    dialogRef.afterClosed().subscribe(
      (confirmedAction: boolean) => {
        if (confirmedAction) {

        }
      }
    )
  }
}
