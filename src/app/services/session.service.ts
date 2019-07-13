import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  shouldSeeLandingAnimation: boolean;
  private shouldSeeLandingAnimationSource: BehaviorSubject<boolean>;
  shouldSeeLandingAnimationObservable: Observable<boolean>;
  isDarkTheme: boolean;

  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: WebStorageService,
    private location: Location,
  ) {
    this.setLandingAnimationParameters();
    this.initializeDarkTheme();
  }

  setLandingAnimationParameters(): void {
    this.shouldSeeLandingAnimation = this.storage.get('hasSeenLandingAnimation');
    if (this.location.path() === '' && this.shouldSeeLandingAnimation === null) {
      this.shouldSeeLandingAnimation = true;
    } else {
      this.shouldSeeLandingAnimation = false;
    }
    this.shouldSeeLandingAnimationSource = new BehaviorSubject(this.shouldSeeLandingAnimation);
    this.shouldSeeLandingAnimationObservable = this.shouldSeeLandingAnimationSource.asObservable();
  }

  justSawLandingAnimation(): void {
    this.shouldSeeLandingAnimation = true;
    this.storage.set('hasSeenLandingAnimation', this.shouldSeeLandingAnimation);
    this.shouldSeeLandingAnimationSource.next(this.shouldSeeLandingAnimation);
  }

  initializeDarkTheme() {
    let isDarkThemeSession = this.storage.get('isDarkTheme');
    if (isDarkThemeSession === null || isDarkThemeSession === undefined) {
      this.isDarkTheme = true;
    } else {
      this.isDarkTheme = isDarkThemeSession;
    }
    this.storage.set('isDarkTheme', this.isDarkTheme);
    this.isDarkThemeSource.next(this.isDarkTheme);
  }

  private isDarkThemeSource: BehaviorSubject<boolean> = new BehaviorSubject(this.isDarkTheme);
  isDarkThemeObservable: Observable<boolean> = this.isDarkThemeSource.asObservable();

  toggleDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.storage.set('isDarkTheme', this.isDarkTheme);
    this.isDarkThemeSource.next(this.isDarkTheme);
  }
}
