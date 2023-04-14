import { Routes } from '@angular/router';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRepositoryStateComponent } from './components/user-repository-state/user-repository-state.component';

export const userRoutes: Routes = [
  {
    path: ':login',
    component: UserProfileComponent,
    children: [
      {
        path: 'repository',
        component: UserRepositoryComponent
      },
      {
        path: 'followers',
        component: UserFollowersComponent
      },
      {
        path: ':repoName',
        component: UserRepositoryStateComponent
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
