import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {

  }

  ngOnInit() {
    var typed = new Typed('.type-my-name', {
      strings: ["E Fournier"],
      typeSpeed: 90,
    });
    typed.start();
  }
}
