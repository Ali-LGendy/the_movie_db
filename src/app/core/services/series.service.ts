import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  getPopular(): Observable<any>{
    return this.http.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  geDetails(id: number): Observable<any>{
     return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  search(query: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${query}`);
  }
}
