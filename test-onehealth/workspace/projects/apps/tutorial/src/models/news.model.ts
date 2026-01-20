import { Category } from "./category.model";

export interface News {
  _id: string;
  title: string;
  thumbnail: string;
  categories: Category[];
  author: string;
  content: string;
  description: string;
  publishOnMain: number; // 1 = slide, 0 = bài viết
}
