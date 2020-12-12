import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "student",
    pathMatch: "full"
  },
  {
    path: 'student',
    loadChildren: () => import('./components/student-info/student-info.module')
      .then(m => m.StudentInfoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
