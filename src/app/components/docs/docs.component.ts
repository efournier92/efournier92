import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  constructor(
    private docsService: DocsService,
  ) { }

  ngOnInit() { }

  uploadDoc(file: any) {
    this.docsService.uploadDoc(file);
  }

}
