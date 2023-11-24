import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../services/course.service';
import { ICourse } from '../../../interfaces/ICourse';

export var coursesSignal= signal<ICourse[]>([]);
export var indexCourseSignal= signal<number>(-1);


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courseService = inject(CourseService)
  courses: ICourse[] = [];

  constructor() { 
    effect(() =>{
      this.courses = this.courseService.courses;
      console.log("list course", this.courses);
      indexCourseSignal();
      //coursesSignal.set(this.courses);
    });
    
  }
  ngOnInit(): void {
    this.courses = this.courseService.courses;
    coursesSignal.set(this.courses);
    console.log("list course", this.courses);
  }

  takeIndexCourse(index: number){
    //console.log("index course", index);
    indexCourseSignal.set(index);
  }
}
