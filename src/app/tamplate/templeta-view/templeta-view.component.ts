import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CourseAddComponent } from '../../pages/course/course-add/course-add.component';
import { CourseEditComponent } from '../../pages/course/course-edit/course-edit.component';
import { CourseListComponent } from '../../pages/course/course-list/course-list.component';

@Component({
  selector: 'app-templeta-view',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './templeta-view.component.html',
  styleUrl: './templeta-view.component.css'
})
export class TempletaViewComponent {

}
