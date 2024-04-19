import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CV } from './cv';

@Injectable({
  providedIn: 'root',
})
export class CVService {
  private baseUrl = '/data';

  constructor(private http: HttpClient) {}

  getCV(): Observable<CV[]> {
    return this.http.get<CV[]>(`${this.baseUrl}/CV`);
  }
}
