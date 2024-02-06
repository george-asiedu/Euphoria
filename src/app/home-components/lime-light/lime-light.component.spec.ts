import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimeLightComponent } from './lime-light.component';

describe('LimeLightComponent', () => {
  let component: LimeLightComponent;
  let fixture: ComponentFixture<LimeLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimeLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LimeLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
