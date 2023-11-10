import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageCoursesComponent } from './page-courses/page-courses.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'courses', component: PageCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
