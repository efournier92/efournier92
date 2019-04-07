import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';
import { DocsEditDialogService } from './docs-edit-dialog/docs-edit-dialog.service';
import { DocsUploadDialogService } from './docs-upload-dialog/docs-upload-dialog.service';
import { Doc } from './doc';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  allTags: string[] = ["Windows", "Bash"];
  selectedTag: string = "";
  allDocs: Doc[];
  filteredDocs: Doc[] = new Array<Doc>();
  selectedDoc: Doc;
  searchQuery: string = "";

  constructor(
    private docsService: DocsService,
    private docsEditDialog: DocsEditDialogService,
    private docsUploadDialog: DocsUploadDialogService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscribeToDocs();
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
        this.selectedTag = result.params.tagName ? result.params.tagName : 'all';
        this.selectedDoc = result.params.fileName ? this.allDocs.find(doc => doc.fileName === result.params.fileName) : null;
        this.setActiveDoc(result.params.fileName);
        this.filterDocsByTag(this.selectedTag);
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
    this.router.navigateByUrl(`docs/${this.selectedTag}/${fileName}`);
  }

  filterDocsByTag(tagName: string) {
    this.selectedTag = tagName;
    this.filteredDocs = [];
    this.allDocs.forEach(
      (doc: Doc) => {
        if (!doc.tags) return;
        doc.tags.forEach(
          (tag: any) => {
            if (tag.toLowerCase() === tagName.toLowerCase()) {
              this.filteredDocs.push(doc);
            }
          }
        )
      }
    )
  }

  searchDocsByName(searchQuery: string) {
    this.selectedTag = 'all';
    this.filteredDocs = this.allDocs.filter(
      (doc: Doc) => {
        const fileName: string = doc.fileName.toLowerCase();
        const query: string = searchQuery.toLowerCase();
        return fileName.includes(query)
      }
    )
  }

  openEditDialog() {
    const dialogRef = this.docsEditDialog.openDialog(
      "Are You Sure?",
      "Do you want to sign out of LeCoursville?",
    );
    dialogRef.afterClosed().subscribe(
      (confirmedAction: boolean) => {
        if (confirmedAction) {

        }
      }
    )
  }

  openUploadDialog() {
    const dialogRef = this.docsUploadDialog.openDialog(
      "Are You Sure?",
      "Do you want to sign out of LeCoursville?",
    );
    dialogRef.afterClosed().subscribe(
      (confirmedAction: boolean) => {
        if (confirmedAction) {

        }
      }
    )
  }
}
