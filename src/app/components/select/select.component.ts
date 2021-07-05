import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() selectSize: any;
  @Input() options: any;
  selectModel: any;
  @Output() onSelect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectValue() {
    return {
      selectedOption: this.options,
      selectSize: this.selectSize,
      selectName: this.selectModel,
    };
  }
}
