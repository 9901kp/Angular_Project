export class ScheduleData {

  date: Date;
  jobTitle: string;
  workerName: string;
  startAt: Date;
  endAt: Date;

  constructor(
    date: Date,
    jobTitle: string,
    workerName: string,
    startAt: Date,
    endAt: Date
  ) {
    this.date = date;
    this.jobTitle = jobTitle;
    this.workerName = workerName;
    this.startAt = startAt;
    this.endAt = endAt;
  }
}
