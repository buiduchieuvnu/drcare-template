import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsView } from '../models/news-view.model';
import { News } from '../models/news.model';
import { NewsApiResponse } from '../models/news-api-response';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private readonly API_URL = 'https://apigateway.vncare.vn/tintuc/api/v1/news/filter';

    constructor(private http: HttpClient) { }

    getNews(params: {
        categoryId: string;
        keyword?: string;
        title?: string;
    }): Observable<NewsView[]> {

        let httpParams = new HttpParams()
            .set('categoryId', params.categoryId)
            .set('keyword', params.keyword ?? '')
            .set('title', params.title ?? '');

        const headers = new HttpHeaders({
            hospitalCode: '99999'
        });

        return this.http.get<NewsApiResponse>(this.API_URL, {
            headers,
            params: httpParams
        }).pipe(
            map(res => res.result.map(item => this.mapToView(item)))
        );

    }
    getNewsById(id: string): Observable<NewsView> {
        const headers = new HttpHeaders({
            hospitalCode: '99999'
        });
        return this.http.get<any>(this.API_URL, { headers }).pipe(
            map(res => {
                const item = res.result.find((n: any) => n._id === id);
                return this.mapToView(item);
            })
        );
    }

    private mapToView(item: News): NewsView {
        return {
            id: item._id,
            title: item.title,
            thumbnail: item.thumbnail,
            categoryName: item.categories?.[0]?.name ?? '',
            categoryId: item.categories?.[0]?._id ?? '',
            author: item.author,
            content: item.content,
            description: item.description,
            publishOnMain: item.publishOnMain
        };
    }
}
