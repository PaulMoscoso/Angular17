import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { CourseAddComponent } from '../course-add/course-add.component';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [CommonModule, CourseAddComponent, CourseEditComponent, CourseListComponent],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {

}
