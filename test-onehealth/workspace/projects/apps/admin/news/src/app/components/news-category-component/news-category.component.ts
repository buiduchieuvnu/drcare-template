import { Component } from '@angular/core';
import { Category } from '../../../models/news-category.model';

@Component({
  selector: 'news-category-component',
  standalone: false,
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent {
  keyword = '';

   // FORM
  form = {
    name: '',
    slug: '',
    parentId: null,
    description: ''
  };

  // TABLE DATA
  listOfData: Category[] = [];
  listOfDisplayData: Category[] = [];

  // SEARCH
  searchText = '';

  // CHECKBOX
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Category[] = [];
  setOfCheckedId = new Set<number>();

  ngOnInit(): void {
    this.listOfData = new Array(20).fill(0).map((_, i) => ({
      id: i,
      name: `Chuyên mục ${i}`,
      slug: `chuyen-muc-${i}`,
      description: `Mô tả cho chuyên mục ${i}` 
    }));

    this.listOfDisplayData = [...this.listOfData];
  }

  // SEARCH LOGIC
    onKeywordChange(): void {
    if (!this.keyword) {
      this.listOfDisplayData = [...this.listOfData];
    }
  }

  onSearch(): void {
    const kw = this.keyword.trim().toLowerCase();

    this.listOfDisplayData = this.listOfData.filter(item =>
      item.name.toLowerCase().includes(kw)
    );
  }


  clearSearch(input: HTMLInputElement): void {
    this.keyword = '';
    this.listOfDisplayData = [...this.listOfData];
    input.focus();
  }


  // CHECKBOX LOGIC
  onItemChecked(id: number, checked: boolean): void {
    checked ? this.setOfCheckedId.add(id) : this.setOfCheckedId.delete(id);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item =>
      value
        ? this.setOfCheckedId.add(item.id)
        : this.setOfCheckedId.delete(item.id)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange(data: readonly Category[]): void {
    this.listOfCurrentPageData = data;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some(item =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  // FORM SUBMIT
  submitForm(): void {
    console.log('FORM DATA:', this.form);
  }
}
