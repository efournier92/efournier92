import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AnimationsService } from './animations.service';

class showButtons {
  tips: boolean;
  projects: boolean;
  about: boolean;
  order: string[];

  constructor() {
    this.tips = false;
    this.projects = false;
    this.about = false;
    this.order = ['tips', 'projects', 'about'];
  }
}

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
  ) {

  }

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
