import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean;
  shouldSeeLandingAnimation: boolean;
  overlay: HTMLElement;

  constructor(
    private sessionService: SessionService,
    private overlayContainer: OverlayContainer,
  ) {
  }

  ngOnInit(): void {
    this.sessionService.isDarkThemeObservable.subscribe(
      isDarkTheme => this.isDarkTheme = isDarkTheme
    );
    this.sessionService.shouldSeeLandingAnimationObservable.subscribe(
      (shouldSeeLandingAnimation: boolean) => {
        this.shouldSeeLandingAnimation = shouldSeeLandingAnimation
      }
    )
    this.overlay = this.overlayContainer.getContainerElement();
    this.applyThemeToOverlayContainer();
  }

  toggleTheme(): void {
    this.sessionService.toggleDarkTheme();
    this.applyThemeToOverlayContainer();
  }

  applyThemeToOverlayContainer(): void {
    for (const className in this.overlay.classList) {
      if (className.includes('theme')) {
        this.overlay.classList.remove(className);
      }
    }
    const themeToAdd = this.isDarkTheme ? 'theme-dark' : 'theme-light'
    this.overlay.classList.add(themeToAdd);
  }
}
