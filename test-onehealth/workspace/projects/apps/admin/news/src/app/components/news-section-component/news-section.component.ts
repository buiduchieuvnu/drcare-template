import { Component } from '@angular/core';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {
  posts = [
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
    { img: '/assets/img/baiviet1.png', category: 'chăm sóc trẻ', title: 'Xét nghiệm vi chất cho trẻ'},
  ];

}
