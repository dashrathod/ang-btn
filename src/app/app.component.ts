import { Component } from '@angular/core';
import { fadeIn, downToUpAnimation } from './animations/animation';
import { SuccessToast } from './helpers/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn]
})
export class AppComponent {
  componentType = 'button';
  btnInfo: any;
  options = [
    { id: 1, name: 'Option 1', val: 1 },
    { id: 2, name: 'Option 2', val: 2 },
    { id: 3, name: 'Option 3', val: 3 },
    { id: 4, name: 'Option 4', val: 4 },
    { id: 5, name: 'Option 5', val: 5 },
  ];
  elementType = [
    { id: 1, name: 'input', val: 'input' },
    { id: 2, name: 'select', val: 'select' },
    { id: 3, name: 'button', val: 'button' },
  ];
  classList = [
    { id: 1, name: 'primary', val: 'primary' },
    { id: 2, name: 'secondary', val: 'secondary' },
    { id: 3, name: 'success', val: 'success' },
    { id: 4, name: 'danger', val: 'danger' },
    { id: 5, name: 'warning', val: 'warning' },
    { id: 6, name: 'info', val: 'info' },
    { id: 7, name: 'light', val: 'light' },
    { id: 8, name: 'dark', val: 'dark' },
    { id: 9, name: 'link', val: 'link' },
    { id: 10, name: 'outline-primary', val: 'outline-primary' },
    { id: 11, name: 'outline-secondary', val: 'outline-secondary' },
    { id: 12, name: 'outline-success', val: 'outline-success' },
    { id: 13, name: 'outline-danger', val: 'outline-danger' },
    { id: 14, name: 'outline-warning', val: 'outline-warning' },
    { id: 15, name: 'outline-info', val: 'outline-info' },
    { id: 16, name: 'outline-light', val: 'outline-light' },
    { id: 17, name: 'outline-dark', val: 'outline-dark' },
    { id: 18, name: 'outline-link', val: 'outline-link' },
  ];
  size = [
    { id: 1, name: 'large', val: 'lg' },
    { id: 2, name: 'small', val: 'sm' },
  ];
  generated = false;
  custom: any = {};
  basicInput;
  largeInput;
  smallInput;
  emailInput;
  passwordInput;
  buttonValue(data): void {
    this.btnInfo = data;
    console.log(this.btnInfo);
    SuccessToast.show(JSON.stringify(data));
    // alert(JSON.stringify(data));
  }
  inputValue(data) {
    return data.inputValue;
  }
  getSelected(data) {
    console.log(data);
  }
  onSelectedType(type: any): void {
    this.custom.type = type.selectName;
  }
  onSelectedSize(size: any): void {
    this.custom.size = size.selectName;
  }
  onSelectedClass(classnm: any): void {
    this.custom.class = classnm.selectName;
  }
  componentName(data) {
    this.custom.name = data.inputValue;
  }
  onGenrate() {
    this.generated = true;
    console.log('custom is', this.custom);
  }
}
