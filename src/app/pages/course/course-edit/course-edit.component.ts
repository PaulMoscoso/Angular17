import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICourse } from '../../../interfaces/ICourse';
import { coursesSignal, indexCourseSignal } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.css'
})
export class CourseEditComponent {
  name: string = '';
  description: string = '';
  courses: ICourse[] = [];
  indexCourse: number = -1;
  constructor(){
    effect(() => {
        this.courses = coursesSignal();
        this.indexCourse = indexCourseSignal();
        //console.log("index course edit", this.indexCourse);

        this.loadCourse();
    });
    
  }

  loadCourse() {
    if(this.indexCourse != -1) {
      console.log("load courses edit", this.courses);
      this.name = this.courses[this.indexCourse].name;
      this.description = this.courses[this.indexCourse].description;
    }
  }

  editCourse() {
    if(this.indexCourse != -1) {
      this.courses[this.indexCourse].name = this.name;
      this.courses[this.indexCourse].description = this.description;
    }
    coursesSignal.set(this.courses);
  }
}
