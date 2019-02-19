import { Component, OnInit } from '@angular/core';
import { AnimationsService } from './animations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isGifHidden = true;
  shownButtons: Array<boolean> = [false, false, false];

  constructor(
    private animations: AnimationsService,
  ) { }

  ngOnInit() {
    this.showButtonsAnimation();
  }

  showButtonsAnimation() {
    this.animations.awaitNextKeystroke(5000).then(
      () => {
        const numberOfButtons = this.shownButtons.length;
        for (let i = 0; i <= numberOfButtons; i++) {
          this.showNextButton(i).then;
        }
      }
    );
  }

  showNextButton(index) {
    if (index >= this.shownButtons.length) return;
    return this.animations.awaitNextKeystroke(5000).then(
      () => {
        this.shownButtons[index] = true;
      }
    )
  }

}
