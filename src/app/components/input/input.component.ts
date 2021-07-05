import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputType;
  @Input() inputSize;
  inputModal;
  @Output() onInput = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  inputValue() {
    return {
      inputValue: this.inputModal,
      inputSize: this.inputSize,
      inputName: this.inputType,
    }
  }
}
