import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  async awaitNextKeystroke(nextKeystrokeInterval?: number) {
    if (!nextKeystrokeInterval)
      var nextKeystrokeInterval = 200 - Math.random() * 100;
    await new Promise(resolve => setTimeout(resolve, nextKeystrokeInterval));
  }

  async sleep(milliseconds: number) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}
