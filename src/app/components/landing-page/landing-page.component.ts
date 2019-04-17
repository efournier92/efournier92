import { Component, OnInit, Inject } from '@angular/core';
import { AnimationsService } from 'src/app/animations.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  shownButtons: Array<boolean> = [false, false, false];
  isDarkTheme: boolean;
  shouldSeeLandingAnimation: boolean;

  constructor(
    private animations: AnimationsService,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.sessionService.shouldSeeLandingAnimationObservable.subscribe(
      (shouldSeeLandingAnimation: boolean) => {
        this.shouldSeeLandingAnimation = shouldSeeLandingAnimation;
        if (this.shouldSeeLandingAnimation)
          this.showButtonsAnimation();
      }
    )
    this.sessionService.isDarkThemeObservable.subscribe(
      isDarkTheme => this.isDarkTheme = isDarkTheme
    )
  }

  showButtonsAnimation(): void {
    this.animations.awaitNextKeystroke(5000).then(
      () => {
        const numberOfButtons = this.shownButtons.length;

        this.sessionService.justSawLandingAnimation();

        for (let i = 0; i <= numberOfButtons; i++) {
          // this.showNextButton(i).then;
        }
      }
    );
  }

  showNextButton(index: number): Promise<void> {
    if (index >= this.shownButtons.length) return;
    return this.animations.awaitNextKeystroke(5000).then(
      () => {
        this.shownButtons[index] = true;
      }
    )
  }
}
