import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class UserRepositoryComponent implements OnInit {

  repos$!: Observable<Irepo[] | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  login:string|undefined;
  constructor(
    private store: Store<RepoState>,
    private userService: UsersService,
    private router: Router
  ) {
    this.userService.login$.pipe(tap(login => this.login = login)).subscribe((login: any) => this.store.dispatch(fetchRepoStart({ login: login })))
  }

  ngOnInit() {
    this.repos$ = this.store.select(selectRepos);
    this.isLoading$ = this.store.select(isLoading);
    this.error$ = this.store.select(error);
  }

  navigatTo(repo:string){
    return this.router.navigate(['profile',this.login,repo]);
  }
}
