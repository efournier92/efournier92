import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLightTheme: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
  }

}
