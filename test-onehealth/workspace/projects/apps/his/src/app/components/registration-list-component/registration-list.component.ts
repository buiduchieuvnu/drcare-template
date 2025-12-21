import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'registration-list-component',
  standalone: false,
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  checked = true;
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  buttonConfigs = [
    {
      "ohId":"button2",
      "ohTitle":"Dịch vụ CLS (F6)",
      "ohOnClick": this.demo1.bind(this),
      "ohType":"primary",
      "ohStatus":"active",
    },
    {
      "ohId":"button3",
      "ohTitle":"Lịch sử điều trị",
      "ohOnClick": this.demo1.bind(this),
      "ohType":"primary",
      "ohStatus":"active",
    },
  ];

  demo1() {
    console.log("demo1")
  }
  log(data: string): void {
    console.log(data);
  }

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London'
    }
  ];
}