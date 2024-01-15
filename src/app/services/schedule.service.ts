import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleData } from './schedule.module';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {}

  getScheduleData(week: Date) {
    const url = `/api/schedule/week/${week.toISOString()}`;
    return this.http.get(url)
      .pipe(
        map((data: any) => {
          return data.map((shift: any) => {
            return new ScheduleData(
              shift.date,
              shift.jobTitle,
              shift.workerName,
              shift.startAt,
              shift.endAt
            );
          });
        }),
      );
  }
}
