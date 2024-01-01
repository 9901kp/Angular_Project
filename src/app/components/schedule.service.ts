import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'your-api-url'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getSchedule(): Observable<any[]> {
    // Implement logic to fetch schedule data from your API
    return this.http.get<any[]>(`${this.apiUrl}/schedule`);
  }
}