import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  hasSeenLandingAnimation: boolean;
  private seenLandingAnimationSource: BehaviorSubject<boolean>;
  hasSeenLandingAnimationObservable: Observable<boolean>;
  isDarkTheme: boolean;

  constructor(
    @Inject(SESSION_STORAGE)
    private storage: WebStorageService,
  ) {
    this.setLandingAnimationParameters();
    this.initializeDarkTheme();
  }

  setLandingAnimationParameters(): void {
    this.hasSeenLandingAnimation = this.storage.get('hasSeenLandingAnimation');
    this.seenLandingAnimationSource = new BehaviorSubject(this.hasSeenLandingAnimation);
    this.hasSeenLandingAnimationObservable = this.seenLandingAnimationSource.asObservable();
  }

  justSawLandingAnimation(): void {
    this.hasSeenLandingAnimation = true;
    this.storage.set('hasSeenLandingAnimation', this.hasSeenLandingAnimation);
    this.seenLandingAnimationSource.next(this.hasSeenLandingAnimation);
  }

  initializeDarkTheme() {
    let isDarkThemeSession = this.storage.get('isDarkTheme');
    if (isDarkThemeSession === null || isDarkThemeSession === undefined) {
      this.isDarkTheme = true;
    } else {
      this.isDarkTheme = isDarkThemeSession;
    }
    this.storage.set('isDarkTheme', isDarkThemeSession);
    this.isDarkThemeSource.next(isDarkThemeSession);
  }

  private isDarkThemeSource: BehaviorSubject<boolean> = new BehaviorSubject(this.isDarkTheme);
  isDarkThemeObservable: Observable<boolean> = this.isDarkThemeSource.asObservable();

  toggleDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.storage.set('isDarkTheme', this.isDarkTheme);
    this.isDarkThemeSource.next(this.isDarkTheme);
  }
}
