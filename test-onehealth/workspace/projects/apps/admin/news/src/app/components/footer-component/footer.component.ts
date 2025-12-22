import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
Department:string = "Khoa Tai Mũi Họng";
  NumberPhone:string ="0987878908";
  Room:string ="Phòng điều trị 1"
  constructor() {}
}
