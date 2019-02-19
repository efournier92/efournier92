import { Component, OnInit, Input } from '@angular/core';
import { AnimationsService } from 'src/app/animations.service';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {
  typedText: string = '';
  loopNum: number = 0;
  @Input()
  stringsToType: Array<string>;
  @Input()
  shouldLoop: boolean;
  @Input()
  delay: number;

  constructor(
    private animations: AnimationsService,
  ) { }

  ngOnInit() {
    this.animations.awaitNextKeystroke(this.delay).then(
      () => {
        this.typeNextKeystroke();
      }
    );
  }

  typeNextKeystroke() {
    var i = this.loopNum % this.stringsToType.length;
    var fullTxt = this.stringsToType[i];

    this.typedText = fullTxt.substring(0, this.typedText.length + 1);

    if (this.shouldLoop && this.typedText === fullTxt) {
      this.eraseTypedText();
      return;
    } else if (this.typedText === '') {
      this.loopNum++;
    }
    this.animations.awaitNextKeystroke().then(() => this.typeNextKeystroke());
  };

  eraseTypedText() {
    this.animations.awaitNextKeystroke(3000).then(
      () => {
        this.eraseKeystroke();
      }
    )
  }

  eraseKeystroke() {
    let fullTxt = this.stringsToType[0];
    let stringLength = this.typedText.length;
    if (stringLength === 0) return;
    this.animations.awaitNextKeystroke(100).then(
      () => {
        this.typedText = fullTxt.substring(0, stringLength - 1);
        if (this.typedText.length > 0) {
          this.eraseKeystroke();
        } else {
          this.animations.awaitNextKeystroke(2000).then(
            () => {
              // this.typeNextKeystroke();
            }
          )
        }
      }
    );
  }
};