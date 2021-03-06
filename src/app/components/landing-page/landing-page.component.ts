import { Component, OnInit, Inject } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';
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
        this.sessionService.justSawLandingAnimation();
      }
    );
  }

  async showNextButton(index: number): Promise<void> {
    if (index >= this.shownButtons.length) return;
    await this.animations.awaitNextKeystroke(5000);
    this.shownButtons[index] = true;
  }
}
