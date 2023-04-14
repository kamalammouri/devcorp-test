import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-profile.routes';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserFollowersComponent,
    UserRepositoryComponent
  ],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule
  ]
})
export class UserProfileModule { }
