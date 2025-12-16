import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news.model';
import { Router } from '@angular/router';

@Component({
  selector: 'news-list-component',
  standalone: false,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  listOfData: News[] = [];
  listOfDisplayData: News[] = [];
  listOfCurrentPageData: readonly News[] = [];

  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();

  listOfSelection = [
    {
      text: 'Select All',
      onSelect: () => this.onAllChecked(true)
    }
  ];


  keyword = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listOfData = new Array(30).fill(0).map((_, i) => ({
      id: i,
      title: `News title ${i}`,
      author: 'Admin',
      description: 'Short description',
      category: 'Health',
      createdAt: new Date(),
      active: i % 2 === 0
    }));

    this.listOfDisplayData = [...this.listOfData];
  }
  onKeywordChange(): void {
    if (!this.keyword) {
      this.listOfDisplayData = [...this.listOfData];
    }
  }

  clearSearch(input: HTMLInputElement): void {
    this.keyword = '';
    this.listOfDisplayData = [...this.listOfData];
    input.focus();
  }

  onSearch(): void {
    const kw = this.keyword.trim().toLowerCase();

    this.listOfDisplayData = this.listOfData.filter(item =>
      item.title.toLowerCase().includes(kw) ||
      item.author.toLowerCase().includes(kw) ||
      item.category.toLowerCase().includes(kw)
    );
  }

  onDeleteSelected(): void {
    this.listOfData = this.listOfData.filter(
      item => !this.setOfCheckedId.has(item.id)
    );

    this.listOfDisplayData = [...this.listOfData];
    this.setOfCheckedId.clear();
    this.refreshCheckedStatus();
  }

  onDeleteSingle(news: News): void {
    this.listOfData = this.listOfData.filter(item => item.id !== news.id);
    this.listOfDisplayData = [...this.listOfData];
  }

  goToEdit(id: number): void {
    this.router.navigate(['/news/edit', id]);
  }

  onActiveChange(news: News, value: boolean): void {
    news.active = value;
    console.log('Update active:', news.id, value);
  }

  updateCheckedSet(id: number, checked: boolean): void {
    checked ? this.setOfCheckedId.add(id) : this.setOfCheckedId.delete(id);
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange(data: readonly News[]): void {
    this.listOfCurrentPageData = data;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked =
      this.listOfCurrentPageData.length > 0 &&
      this.listOfCurrentPageData.every(item =>
        this.setOfCheckedId.has(item.id)
      );

    this.indeterminate =
      this.listOfCurrentPageData.some(item =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  get hasSelected(): boolean {
    return this.setOfCheckedId.size > 0;
  }

}
