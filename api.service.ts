import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // Django server base URL

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/signup/`, data);
}

login(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/login/`, data);
}
call_http_post({ url, data, successCb, errorCb }: any) {
  console.log('📤 POST to:', url, 'with data:', data);  // ✅ log here

  this.http.post(url, data).subscribe({
    next: (res) => {
      console.log('✅ Response:', res);
      successCb(res);
    },
    error: (err) => {
      console.error('❌ HTTP Error:', err);  // ✅ critical log
      errorCb(err);
    }
  });
}
  };





