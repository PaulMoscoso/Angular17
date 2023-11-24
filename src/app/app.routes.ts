import { Routes } from '@angular/router';
import { HomeViewComponent } from './pages/home/home-view/home-view.component';
import { CourseViewComponent } from './pages/course/course-view/course-view.component';

export const routes: Routes = [
    {
        path:"home", component: HomeViewComponent,
    },
    {
        path:"course", component: CourseViewComponent,
    }
];
