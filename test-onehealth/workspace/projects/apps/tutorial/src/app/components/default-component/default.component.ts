import { Component } from '@angular/core';

@Component({
  selector: 'default-component',
  standalone: false,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  checked = true;

  constructor() {}

  check(event) {
    console.log(event);
  }

  onClick(event) {
    console.log(event);
  }
}
