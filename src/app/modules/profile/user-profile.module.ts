import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-profile.routes';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepositoryStateComponent } from './components/user-repository-state/user-repository-state.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserFollowersComponent,
    UserRepositoryComponent,
    UserRepositoryStateComponent
  ],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule
  ]
})
export class UserProfileModule { }
