import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = environment.apiKey;
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
    getPopular(): Observable<any>{
      return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
    }

    getDetails(id:number): Observable<any>{
      return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
    }

    search(query: string): Observable<any>{
      return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
    }
}
