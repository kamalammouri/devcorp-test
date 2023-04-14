import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ifollower } from 'src/app/models/follower.model';
import { UsersService } from 'src/app/services/users.service';
import { fetchFollowerStart } from 'src/app/stores/actions/follower.actions';
import { error, isLoading, selectFollowers } from 'src/app/stores/selectors/follower.selector';
import { FollowerState } from 'src/app/stores/states/follower.state';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss']
})
export class UserFollowersComponent {

  followers$!: Observable<Ifollower[] | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  constructor(
    private store: Store<FollowerState>,
    private userService: UsersService
  ) {
    this.userService.login$.subscribe((login: any) => this.store.dispatch(fetchFollowerStart({ login: login })))
  }

  ngOnInit() {
    this.followers$ = this.store.select(selectFollowers);
    this.isLoading$ = this.store.select(isLoading);
    this.error$ = this.store.select(error);
  }

}
