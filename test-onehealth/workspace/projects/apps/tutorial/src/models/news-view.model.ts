export interface NewsView {
  id: string;
  title: string;
  thumbnail: string;
  categoryName: string;
  categoryId: string;
  author: string;
  content: string;
  description: string;
  publishOnMain: number;  // 1 = slide, 0 = bài viết
}
