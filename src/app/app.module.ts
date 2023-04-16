import { NgModule, isDevMode } from '@angular/core';
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
import { stateRepoReducer } from './stores/reducers/state.reducer';
import { StateRepoEffects } from './stores/effects/state.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({'profile': profileReducer,'repo': repoReducer, 'follower':FollowerReducer , 'stateRepo' : stateRepoReducer}),
    EffectsModule.forRoot([ProfileEffects,RepoEffects,FollowerEffects,StateRepoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
