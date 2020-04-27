import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UrlshortnerService {

  constructor(private http:HttpClient) { }

  postURL(data): Observable<any> {
    return this.http.post('http://localhost:3000/create', data)
  }
  getURLs(): Observable<any> {
    return this.http.get('http://localhost:3000/view')
  }
}
