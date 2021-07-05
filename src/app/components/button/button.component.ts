import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonClass: any = '';
  @Input() buttonName: any = '';
  @Input() buttonSize: any = '';
  @Input() buttonShape: any = '';
  @Input() buttonIcon: any;
  @Output() btnEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onButton(): any {
    return {
      btnType: this.buttonClass,
      btnSize: this.buttonSize,
      btnName: this.buttonName
    };
  }
}
