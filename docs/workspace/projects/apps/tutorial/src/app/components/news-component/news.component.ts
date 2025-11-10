import { Component } from '@angular/core';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  posts = [
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
  ];

}
