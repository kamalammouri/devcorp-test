import { Routes } from '@angular/router';
import { UserProfileModule } from '../profile/user-profile.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: 'profile',
        loadChildren: () => UserProfileModule
      },
      {
        path: 'profile/:login',
        loadChildren: () => UserProfileModule
      }
    ]
  },
];
