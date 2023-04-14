import { Routes } from '@angular/router';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const userRoutes: Routes = [
  {
    path: ':login',
    component: UserProfileComponent,
    children: [
      {
        path: 'overview',
        component: UserOverviewComponent
      },
      {
        path: 'repository',
        component: UserRepositoryComponent
      },
      {
        path: 'followers',
        component: UserFollowersComponent
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ]
  },
];
