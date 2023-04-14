import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetshProfile } from 'src/app/actions/profile.actions';
import { Iprofile } from 'src/app/models/profile.model';
import { ProfileState } from 'src/app/states/profile.state';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent {
  profile$!: Observable<Iprofile | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;

  constructor(private store: Store<ProfileState>) {}

  ngOnInit() {
    this.store.dispatch(fetshProfile({ login: 'ezmobius' }));

    this.profile$ = this.store.select((state) => state.response);
    this.isLoading$ = this.store.select((state) => state.isLoading);
    this.error$ = this.store.select((state) => state.error);
  }

}
