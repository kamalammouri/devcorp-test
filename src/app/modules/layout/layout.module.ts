import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { layoutRoutes } from './layout.routes';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/stores/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from 'src/app/stores/effects/users.effects';


@NgModule({
  declarations: [
    UsersListComponent,
    HomeComponent
  ],
  imports: [
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UsersEffects]),
    RouterModule.forChild(layoutRoutes),
    CommonModule
  ]
})
export class UsersModule { }
