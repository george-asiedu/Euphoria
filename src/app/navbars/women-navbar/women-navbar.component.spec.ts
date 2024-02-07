import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenNavbarComponent } from './women-navbar.component';

describe('WomenNavbarComponent', () => {
  let component: WomenNavbarComponent;
  let fixture: ComponentFixture<WomenNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
