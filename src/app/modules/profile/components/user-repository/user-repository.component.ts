import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { Irepo } from 'src/app/models/repo.model';
import { UsersService } from 'src/app/services/users.service';
import { fetchRepoStart } from 'src/app/stores/actions/repo.actions';
import { isLoading, error } from 'src/app/stores/reducers/api-users.reducer';
import { selectProfile } from 'src/app/stores/selectors/profile.selector';
import { selectRepos } from 'src/app/stores/selectors/repo.selector';
import { RepoState } from 'src/app/stores/states/repo.state';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss']
})
export class UserRepositoryComponent {

  repos$!: Observable<Irepo[] | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  constructor(
    private store: Store<RepoState>,
    private userService: UsersService
  ) {
    this.userService.login$.subscribe((login: any) => this.store.dispatch(fetchRepoStart({ login: login })))
  }

  ngOnInit() {
    this.repos$ = this.store.select(selectRepos);
    this.isLoading$ = this.store.select(isLoading);
    this.error$ = this.store.select(error);
  }
}
