import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {
  stringsToType: Array<string>;
  loopNum: number = 0;
  typedText: string = '';

  constructor() { }

  ngOnInit() {
    this.stringsToType = ["E Fournier"];
    this.typeNextKeystroke();
  }

  typeNextKeystroke() {
    var i = this.loopNum % this.stringsToType.length;
    var fullTxt = this.stringsToType[i];

    this.typedText = fullTxt.substring(0, this.typedText.length + 1);

    if (this.typedText === fullTxt) {
      // this.eraseTypedText();
      return;
    } else if (this.typedText === '') {
      this.loopNum++;
    }

    this.awaitNextKeystroke().then(() => this.typeNextKeystroke());
  };

  eraseTypedText() {
    this.awaitNextKeystroke(3000).then(
      () => {
        this.eraseKeystroke();
      }
    )
  }

  eraseKeystroke() {
    let fullTxt = this.stringsToType[0];
    let stringLength = this.typedText.length;
    if (stringLength === 0) return;
    this.awaitNextKeystroke(100).then(
      () => {
        this.typedText = fullTxt.substring(0, stringLength - 1);
        if (this.typedText.length > 0) {
          this.eraseKeystroke();
        } else {
          this.awaitNextKeystroke(2000).then(
            () => {
              // this.typeNextKeystroke();
            }
          )
        }
      }
    );
  }

  async awaitNextKeystroke(nextKeystrokeInterval?: number) {
    if (!nextKeystrokeInterval)
      var nextKeystrokeInterval = 200 - Math.random() * 100;
    await new Promise(resolve => setTimeout(resolve, nextKeystrokeInterval));
  }
};
