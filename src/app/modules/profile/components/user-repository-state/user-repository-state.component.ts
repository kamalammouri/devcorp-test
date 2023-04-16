import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';
import { Chart } from 'chart.js/auto';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  catchError,
  combineLatest,
  combineLatestWith,
  concatMap,
  distinctUntilChanged,
  filter,
  forkJoin,
  from,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { IstateRepo } from 'src/app/models/state-repo.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchStateStart } from 'src/app/stores/actions/state.actions';
import { error, isLoading, selectStateRepos } from 'src/app/stores/selectors/state.selector';
@Component({
  selector: 'app-user-repository-state',
  templateUrl: './user-repository-state.component.html',
  styleUrls: ['./user-repository-state.component.scss'],
})
export class UserRepositoryStateComponent implements OnInit {
  stateRepos$!: Observable<any | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  repoName$ = this.route.params.pipe(
    map((params: any) => params.repoName),
    filter((repoName) => repoName),
    distinctUntilChanged()
  );

  commits = 0;
  issues = 0;
  pullRequests = 0;
  @ViewChild('chart') chartRef!: ElementRef;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    console.log('UserRepositoryStateComponent constru');
    this.isLoading$ = this.store.select(isLoading);
    this.error$ = this.store.select(error);

    this.userService.login$
    .pipe(
      combineLatestWith(this.repoName$),
      filter(([login, repoName]) => login && repoName),
      distinctUntilChanged()
      )
    .subscribe(([login, repoName]) => {
      this.store.dispatch(fetchStateStart({ login: login, repoName: repoName }));
    });

    this.stateRepos$ = this.store.select(selectStateRepos).pipe(
      filter((state:any) => state),
      distinctUntilChanged(),
      switchMap((state:IstateRepo) => {
        const commits$ = this.userService.getStateFromUrl(state?.commits_url.replace('{/sha}',''));
        const issues$ = this.userService.getStateFromUrl(state?.issues_url.replace('{/number}',''));
        const pulls$ = this.userService.getStateFromUrl(state?.pulls_url.replace('{/number}',''));

        return forkJoin([commits$, issues$, pulls$]).pipe(
          map(([commits, issues, pulls]) => ({
            name: state?.name,
            commits,
            issues,
            pulls
          })))
      }),


    );


  }

  ngOnInit(): void {

    console.log('UserRepositoryStateComponent init');

  }

}
