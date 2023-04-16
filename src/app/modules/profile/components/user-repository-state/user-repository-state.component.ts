import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  combineLatestWith,
  distinctUntilChanged,
  filter,
  forkJoin,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { IstateRepo } from 'src/app/models/state-repo.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchStateStart } from 'src/app/stores/actions/state.actions';
import { error, isLoading, selectStateRepos } from 'src/app/stores/selectors/state.selector';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-user-repository-state',
  templateUrl: './user-repository-state.component.html',
  styleUrls: ['./user-repository-state.component.scss'],
})
export class UserRepositoryStateComponent {
  stateRepos$!: Observable<any | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  repoName$ = this.route.params.pipe(
    map((params: any) => params.repoName),
    filter((repoName) => repoName),
    distinctUntilChanged()
  );

  commits:any = undefined;
  issues:any = undefined;
  pulls :any= undefined;


lineChartData:any = [];
lineChartLabels:any = [];
lineChartOptions: ChartOptions = {
  responsive: true,
};
lineChartPlugins = [];

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private store: Store
  ) {
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
      tap(e => {
        this.commits = e.commits.data;
        this.issues = e.issues.data;
        this.pulls = e.pulls.data;
        this.updateChartData(this.commits, this.issues, this.pulls);
      })
    );
  }


  private updateChartData(commits: any[], issues: any[], pulls: any[]): void {
    const groupedCommits = this.groupByDate(commits,'commit');
    const groupedIssues = this.groupByDate(issues);
    const groupedPulls = this.groupByDate(pulls);

    const allDates = Array.from(new Set([...Object.keys(groupedCommits), ...Object.keys(groupedIssues), ...Object.keys(groupedPulls)])).sort();
    //return console.log('groupedCommits',groupedCommits,'groupedIssues',groupedIssues,'groupedPulls',groupedPulls)
    this.lineChartLabels = allDates;
    this.lineChartData = [
      { data: allDates.map(date => groupedCommits[date] || 0), label: 'Commits' },
      { data: allDates.map(date => groupedIssues[date] || 0), label: 'Issues' },
      { data: allDates.map(date => groupedPulls[date] || 0), label: 'Pulls' },
    ];
  }

  private groupByDate(items: any[],type:string='any'): { [key: string]: number } {
    return items?.reduce((acc, item) => {
      const createdAt = (type === 'commit') ? moment(item.commit.author.date).format('YYYY-MM-DD') : moment(item.created_at).format('YYYY-MM-DD');
      acc[createdAt] = (acc[createdAt] || 0) + 1;
      return acc;
    }, {});
  }



}
