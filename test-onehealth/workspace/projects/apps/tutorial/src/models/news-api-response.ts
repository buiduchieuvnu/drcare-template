import { News } from './news.model';

export interface NewsApiResponse {
  errorCode: number;
  errorMessage: string;
  result: News[];
}
