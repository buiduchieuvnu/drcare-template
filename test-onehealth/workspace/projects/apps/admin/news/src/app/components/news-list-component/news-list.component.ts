import { Component } from '@angular/core';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  posts = [
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
  ];

}
