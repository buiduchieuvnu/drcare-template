import { Component } from '@angular/core';
import { NewsView } from '../../../models/news-view.model';
import { NewsService } from '../../../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'health-component',
  standalone: false,
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  slides: NewsView[] = [];
  articles: NewsView[] = [];
  pagedArticles: NewsView[] = [];
  filteredArticles: NewsView[] = []; 
  pageIndex = 1;
  pageSize = 4;
  total = 0;
  searchKeyword = '';
  
  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews({
      categoryId: '69659ee36191628e703967c7'
    }).subscribe({
      next: (data) => {
        this.slides = data.filter(item => item.publishOnMain === 1);

        this.articles = data.filter(item => item.publishOnMain === 0);
        this.filteredArticles = [...this.articles];
        this.total = this.filteredArticles.length;

        this.updatePagedArticles();
      },
      error: (err) => console.error(err)
    });
  }

  // LẤY DỮ LIỆU THEO TRANG
  updatePagedArticles(): void {
    const start = (this.pageIndex - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedArticles = this.filteredArticles.slice(start, end);
    this.total = this.filteredArticles.length;
  }

  // BẮT SỰ KIỆN ĐỔI TRANG
  onPageIndexChange(page: number): void {
    this.pageIndex = page;
    this.updatePagedArticles();
  }
  onSearch(): void {
    const keyword = this.searchKeyword.trim().toLowerCase();

    this.pageIndex = 1;

    if (!keyword) {
      this.filteredArticles = [...this.articles];
    } else {
      this.filteredArticles = this.articles.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      );
    }

    this.total = this.filteredArticles.length;
    this.updatePagedArticles();
  }
  clearSearch(): void {
    this.searchKeyword = '';
    this.filteredArticles = [...this.articles];
    this.pageIndex = 1;
    this.updatePagedArticles();
  }

  goToDetail(id: string): void {
    this.router.navigate(['/news', id]);
  }
}
