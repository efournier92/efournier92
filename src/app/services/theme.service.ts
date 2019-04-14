import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme: boolean = true;

  constructor() { }

  private isDarkThemeSource: BehaviorSubject<boolean> = new BehaviorSubject(this.isDarkTheme);
  isDarkThemeObservable: Observable<boolean> = this.isDarkThemeSource.asObservable();

  toggleThemeEvent(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.isDarkThemeSource.next(this.isDarkTheme);
  }
}
