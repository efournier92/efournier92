import { Component, EventEmitter, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';

interface HTMLInput extends HTMLElement {
  value: any;
  files: any;
}

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Input()
  matIcon: string;
  @Input()
  inputMessage: string;
  @Input()
  startWithFileSelect: boolean;
  @Input()
  multipleFiles: boolean;
  @Output()
  onInputFileChange: EventEmitter<HTMLInput> = new EventEmitter();
  fileInput: HTMLInput;
  inputPlaceholder: string;

  constructor() { }

  ngOnInit() {
    this.fileInput = document.getElementById('file-input-file') as HTMLInput;
    this.inputPlaceholder = this.inputMessage;
    if (this.startWithFileSelect)
      this.openFileSelect();
  }

  openFileSelect(): any {
    this.fileInput.click();
  }

  onInputChange() {
    this.onInputFileChange.emit(this.fileInput.files);
    if (!this.fileInput)
      return;
    this.changeInputText();
  }

  changeInputText() {
    const inputString = this.fileInput.value;
    let i: number;
    if (inputString.lastIndexOf('\\')) {
      i = inputString.lastIndexOf('\\') + 1;
    } else if (inputString.lastIndexOf('/')) {
      i = inputString.lastIndexOf('/') + 1;
    }
    this.inputPlaceholder = inputString.slice(i, inputString.length);
  }

  shouldAllowCancel(): boolean {
    if (this.fileInput && this.fileInput.files && this.fileInput.files.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  clearInput() {
    // document.getElementById('file-input-file').value = ""
    this.fileInput.value = "";
    this.inputPlaceholder = this.inputMessage;
  }
}
