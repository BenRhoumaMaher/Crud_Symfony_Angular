import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  exports: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
