import { distinctUntilChanged, filter, map, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchProfileStart } from 'src/app/stores/actions/profile.actions';
import { Iprofile } from 'src/app/models/profile.model';
import { ProfileState } from 'src/app/stores/states/profile.state';
import { error, isLoading, selectProfile } from 'src/app/stores/selectors/profile.selector';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  profile$!: Observable<Iprofile | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  constructor(
    private store: Store<ProfileState>,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.route.params
      .pipe(
        map((params: any) => params.login),
        filter(login => login),
        distinctUntilChanged(),
        tap(login => this.userService.login$.next(login))
      )
      .subscribe((login: string) => this.store.dispatch(fetchProfileStart({ login: login })));
  }

  ngOnInit(): void {
    this.profile$ = this.store.select(selectProfile);
    this.isLoading$ = this.store.select(isLoading);
    this.error$ = this.store.select(error);
  }

  ngOnDestroy(): void {
    this.userService.login$.next('')
  }

}
