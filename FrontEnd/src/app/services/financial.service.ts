import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/GetCustomer/${id}`);
  }

  post(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
