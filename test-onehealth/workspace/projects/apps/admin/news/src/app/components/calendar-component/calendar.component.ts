import { Component } from '@angular/core';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  posts = [
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
  ];

}
