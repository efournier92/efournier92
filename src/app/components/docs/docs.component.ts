import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';
import { DocsEditDialogService } from './docs-edit-dialog/docs-edit-dialog.service';
import { DocsUploadDialogService } from './docs-upload-dialog/docs-upload-dialog.service';
import { Doc, Tag } from './doc';
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
  viewMode: string = "docs"

  constructor(
    private docsService: DocsService,
    private docsEditDialog: DocsEditDialogService,
    private docsUploadDialog: DocsUploadDialogService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadAllDocs();

    // this.route.paramMap.subscribe(params => {
    //   this.products.forEach((p: Product) => {
    //     if (p.id == params.id) {
    //       this.product = p;
    //     }
    //   });
    // });
  }

  changeSelectedDoc(fileName: string): void {
    this.selectedDoc = this.allDocs.find(
      doc => doc.fileName === fileName,
    )
    this.filterDocsByTag(this.selectedTag);
    this.router.navigateByUrl(`docs/${this.selectedTag}/${fileName}`);
  }

  filterDocsByFilename() {
    this.filteredDocs = this.allDocs.filter(
      (doc: Doc) => {
        const fileName: string = doc.fileName.toLowerCase();
        const query: string = this.searchQuery.toLowerCase();
        return fileName.includes(query)
      }
    )
  }

  filterDocsByTag(tagName: string) {
    this.selectedTag = tagName;
    // this.filteredDocs = new Array<Doc>();
    this.allDocs.forEach(
      (doc: Doc) => {
        if (!doc.tags) return;
        doc.tags.forEach(
          (tag: Tag) => {
            if (tag.name.toLowerCase() === tagName.toLowerCase()) {
              this.filteredDocs.push(doc);
            }
          }
        )
      }
    )
  }

  loadAllDocs(): void {
    this.docsService.getAllDocs().valueChanges().subscribe(
      (docs: Array<Doc>) => {
        this.allDocs = docs;
        // this.filteredDocs = this.allDocs;
        // this.selectedDocParam = this.route.paramMap;
        // this.selectedDoc = this.allDocs.find
        this.route.paramMap.subscribe(
          (result: any) => {
            this.changeSelectedDoc(result.params.fileName);
            // this.filterDocsByTag(result.params.tagName)
            if (!result || !result.params || result.params.tagName === 'all') {
              this.filteredDocs = this.allDocs;
              return;
            }
            // this.viewMode = "tags";
            this.selectedTag = result.params.tagName;
            this.allDocs.forEach(
              (doc: Doc) => {
                if (doc => doc.fileName === result.params.fileName)
                  this.selectedDoc = doc;
                if (doc.tags) {
                  doc.tags.forEach(
                    (tag: Tag) => {
                      if (tag.name.toLowerCase() === result.params.tagName.toLowerCase()) {
                        this.filteredDocs.push(doc);
                      }
                    }
                  );
                }
              }
            )
          }
          // }
        );
      }
    );
  }

  openEditDialog() {
    const dialogRef = this.docsEditDialog.openDialog(
      "Are You Sure?",
      "Do you want to sign out of LeCoursville?",
    );
    dialogRef.afterClosed().subscribe(
      (confirmedAction: boolean) => {
        if (confirmedAction) {
          console.log('dialog action');
          // this.fireAuth.auth.signOut();
          // this.user = undefined;
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
          console.log('dialog action');
          // this.fireAuth.auth.signOut();
          // this.user = undefined;
        }
      }
    )
  }
}
