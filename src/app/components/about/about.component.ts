import { Component, OnInit } from '@angular/core';
import { AboutMes, Maxims } from './about-me-content'
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutMes: string[] = AboutMes;
  maxims: string[] = Maxims;
  isDarkTheme: boolean;

  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.sessionService.isDarkThemeObservable.subscribe(
      isDarkTheme => this.isDarkTheme = isDarkTheme
    )
  }
}
