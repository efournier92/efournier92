import { Component, OnInit } from '@angular/core';
import { Maxims } from './maxims';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  maxims: string[];
  isDarkTheme: boolean;

  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.maxims = Maxims;
    this.sessionService.isDarkThemeObservable.subscribe(
      isDarkTheme => this.isDarkTheme = isDarkTheme
    )
  }

}
