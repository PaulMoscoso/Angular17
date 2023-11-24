import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/ICourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: ICourse[] = [
    { id: 1, name: 'Angular', description: 'Angular description' },
    { id: 2, name: 'Asp.net', description: 'Asp.net description' }
  ]

  constructor() { }
}
