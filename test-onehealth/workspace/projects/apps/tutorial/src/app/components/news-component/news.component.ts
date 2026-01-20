import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../service/news.service';
import { NewsView } from '../../../models/news-view.model';

@Component({
  selector: 'news-component',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

   news!: NewsView;
  relatedPosts: NewsView[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadNewsDetail(id);
      }
    });
  }

  private loadNewsDetail(id: string): void {
    this.newsService.getNewsById(id).subscribe({
      next: data => {
        this.news = data;
        this.loadRelatedPosts(data.categoryId, data.id);
      },
      error: err => console.error(err)
    });
  }

  private loadRelatedPosts(categoryId: string, currentId: string): void {
    this.newsService.getNews({ categoryId }).subscribe({
      next: list => {
        this.relatedPosts = list
          .filter(item => item.id !== currentId)
          .slice(0, 6);
      },
      error: err => console.error(err)
    });
  }
  
  goToDetail(id: string): void {
    this.router.navigate(['/news', id]);
  }
}
