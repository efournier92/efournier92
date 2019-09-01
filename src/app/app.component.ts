import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean;
  shouldSeeLandingAnimation: boolean;
  overlay: HTMLElement;
  isMobile: boolean;

  constructor(
    private sessionService: SessionService,
    private overlayContainer: OverlayContainer,
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
    this.overlay = this.overlayContainer.getContainerElement();
    this.applyThemeToOverlayContainer();
    this.isMobile = this.checkIfMobile(window.innerHeight);
  }

  toggleTheme(): void {
    this.sessionService.toggleDarkTheme();
    this.applyThemeToOverlayContainer();
  }

  removeTheme(): void {
    const classList = this.overlay.classList;
    if (classList.contains("theme-dark"))
      classList.remove("theme-dark");
    if (classList.contains("theme-light"))
      classList.remove("theme-light");
  }

  applyThemeToOverlayContainer(): void {
    const themeToAdd = this.isDarkTheme ? 'theme-dark' : 'theme-light';
    this.removeTheme();
    this.overlay.classList.add(themeToAdd);
  }

  onResized(event: ResizedEvent): void {
    let width = event.newWidth;
    this.isMobile = this.checkIfMobile(width);
  }

  checkIfMobile(width: number): boolean {
    if (width < 600) {
      return true;
    } else {
      return false;
    }
  }
}
