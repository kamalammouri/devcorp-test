import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoryStateComponent } from './user-repository-state.component';

describe('UserRepositoryStateComponent', () => {
  let component: UserRepositoryStateComponent;
  let fixture: ComponentFixture<UserRepositoryStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRepositoryStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRepositoryStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
