import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossValidatorComponent } from './cross-validator.component';

describe('CrossValidatorComponent', () => {
  let component: CrossValidatorComponent;
  let fixture: ComponentFixture<CrossValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrossValidatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
