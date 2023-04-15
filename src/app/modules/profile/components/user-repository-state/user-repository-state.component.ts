import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';
import { Chart } from 'chart.js';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  combineLatest,
  combineLatestWith,
  distinctUntilChanged,
  filter,
  map,
  tap,
} from 'rxjs';
import { IstateRepo } from 'src/app/models/state-repo.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchStateStart, fetchStateSuccess } from 'src/app/stores/actions/state.actions';
import { error, isLoading, selectStateRepos } from 'src/app/stores/selectors/state.selector';
@Component({
  selector: 'app-user-repository-state',
  templateUrl: './user-repository-state.component.html',
  styleUrls: ['./user-repository-state.component.scss'],
})
export class UserRepositoryStateComponent implements OnInit {
  stateRepos$!: Observable<IstateRepo | undefined>;
  isLoading$!: Observable<boolean | undefined>;
  error$!: Observable<HttpErrorResponse | undefined>;
  repoName$ = this.route.params.pipe(
    map((params: any) => params.repoName),
    filter((repoName) => repoName),
    distinctUntilChanged()
  );

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.userService.login$
      .pipe(combineLatestWith(this.repoName$))
      .subscribe(([login, repoName]) => {
        console.log(login, repoName)
        this.store.dispatch(fetchStateStart({ login: login, repoName: repoName }));
      });

      this.stateRepos$ = this.store.select(selectStateRepos)
      this.isLoading$ = this.store.select(isLoading)
      this.error$ = this.store.select(error)
  }

}
