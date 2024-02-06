import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenNavbarComponent } from './men-navbar.component';

describe('MenNavbarComponent', () => {
  let component: MenNavbarComponent;
  let fixture: ComponentFixture<MenNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
