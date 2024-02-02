import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninNavbarComponent } from './signin-navbar.component';

describe('SigninNavbarComponent', () => {
  let component: SigninNavbarComponent;
  let fixture: ComponentFixture<SigninNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
