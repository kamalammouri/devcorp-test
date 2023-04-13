import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { layoutRoutes } from './layout.routes';



@NgModule({
  declarations: [
    UsersListComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(layoutRoutes),
    CommonModule
  ]
})
export class UsersModule { }
