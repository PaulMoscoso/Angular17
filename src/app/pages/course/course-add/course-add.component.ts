import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICourse } from '../../../interfaces/ICourse';
import { coursesSignal } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent {
  name: string = '';
  description: string = '';
  price: number = 0;
  courses:ICourse[] = [];

  constructor() {
    effect(() => {
      this.courses = coursesSignal()
      console.log("add course", this.courses);
    });
  } 

  addCourse() {
    let id = this.courses.length + 1;
    const course: ICourse = {
      id: id,
      name: this.name,
      description: this.description,
    };
    this.courses.push(course);
    coursesSignal.set(this.courses);
    this.name='';
    this.description='';
  }

}
