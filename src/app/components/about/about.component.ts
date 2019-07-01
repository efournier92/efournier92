import { Component, OnInit } from '@angular/core';
import { Maxims } from './maxims';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  maxims: string[];

  constructor() { }

  ngOnInit() {
    this.maxims = Maxims;
  }

}
