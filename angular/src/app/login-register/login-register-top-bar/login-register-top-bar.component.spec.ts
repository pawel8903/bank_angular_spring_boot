import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterTopBarComponent } from './login-register-top-bar.component';

describe('LoginRegisterTopBarComponent', () => {
  let component: LoginRegisterTopBarComponent;
  let fixture: ComponentFixture<LoginRegisterTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
