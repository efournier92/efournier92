import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean;
  hasSeenLandingAnimation: boolean;

  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.sessionService.isDarkThemeObservable.subscribe(
      isDarkTheme => this.isDarkTheme = isDarkTheme
    );
    this.sessionService.hasSeenLandingAnimationObservable.subscribe(
      (hasSeenLandingAnimation: boolean) => {
        this.hasSeenLandingAnimation = hasSeenLandingAnimation
      }
    )
  }

  toggleTheme(): void {
    this.sessionService.toggleDarkTheme();
  }

}
