import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { News } from '../../../models/news.model';
import { Router } from '@angular/router';
import { ColumnItem } from '../../../models/columnItem.model';
import { NewsActionStateService } from '../../../service/news-action.service';

@Component({
  selector: 'news-list-component',
  standalone: false,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  
  listOfData: News[] = [];
  listOfDisplayData: News[] = [];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData: readonly News[] = [];

  listOfColumns: ColumnItem<News>[] = [
    {
      name: 'Title',
      sortOrder: null,
      sortFn: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Author',
      sortOrder: null,
      sortFn: (a, b) => a.author.localeCompare(b.author),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Description',
      sortOrder: null,
      sortFn: null,
      sortDirections: [null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Category',
      sortOrder: null,
      sortFn: (a, b) => a.category.localeCompare(b.category),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [
        { text: 'Health', value: 'Health' }
      ],
      filterFn: (category: string, item) =>
        item.category.indexOf(category) !== -1,
      filterMultiple: false
    },
    {
      name: 'Created At',
      sortOrder: null,
      sortFn: (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime(),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    }
  ];

  constructor(private router: Router,
    private actionState: NewsActionStateService
  ) { }

  ngOnInit(): void {
    this.listOfData = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      title: `News title ${i}`,
      author: 'Admin',
      description: 'Short description',
      category: 'Health',
      createdAt: new Date()
    }));

    this.listOfDisplayData = [...this.listOfData];
  }

  onItemChecked(id: number, checked: boolean): void {
    checked
      ? this.setOfCheckedId.add(id)
      : this.setOfCheckedId.delete(id);
    this.refreshCheckedStatus();
  }
  /** Check all */
  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => {
      value
        ? this.setOfCheckedId.add(item.id)
        : this.setOfCheckedId.delete(item.id);
    });

    this.refreshCheckedStatus();
  }
  /** Bắt data trang hiện tại */
  onCurrentPageDataChange(data: readonly News[]): void {
    this.listOfCurrentPageData = data;
    this.refreshCheckedStatus();
  }

  /** Đồng bộ trạng thái checkbox header */
  refreshCheckedStatus(): void {
    const total = this.listOfCurrentPageData.length;
    const checkedCount = this.listOfCurrentPageData.filter(item =>
      this.setOfCheckedId.has(item.id)
    ).length;

    this.checked = total > 0 && checkedCount === total;
    this.indeterminate = checkedCount > 0 && checkedCount < total;
    
    this.actionState.setSelectedIds(Array.from(this.setOfCheckedId));
  }

}
