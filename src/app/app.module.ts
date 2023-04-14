import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileEffects } from 'src/app/stores/effects/profile.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer } from './stores/reducers/profile.reducer';
import { repoReducer } from './stores/reducers/repo.reducer';
import { RepoEffects } from './stores/effects/repo.effects';
import { FollowerReducer } from './stores/reducers/follower.reducer copy';
import { FollowerEffects } from './stores/effects/follower.effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({'profile': profileReducer,'repo': repoReducer, 'follower':FollowerReducer}),
    EffectsModule.forRoot([ProfileEffects,RepoEffects,FollowerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
