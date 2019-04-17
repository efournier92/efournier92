import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean;
  shouldSeeLandingAnimation: boolean;

  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.sessionService.isDarkThemeObservable.subscribe(
      isDarkTheme => this.isDarkTheme = isDarkTheme
    );
    this.sessionService.shouldSeeLandingAnimationObservable.subscribe(
      (shouldSeeLandingAnimation: boolean) => {
        this.shouldSeeLandingAnimation = shouldSeeLandingAnimation
      }
    )
  }

  toggleTheme(): void {
    this.sessionService.toggleDarkTheme();
  }

}
