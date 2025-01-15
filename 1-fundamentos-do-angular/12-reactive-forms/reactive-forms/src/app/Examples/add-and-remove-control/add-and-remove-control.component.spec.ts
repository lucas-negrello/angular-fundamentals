import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndRemoveControlComponent } from './add-and-remove-control.component';

describe('AddAndRemoveControlComponent', () => {
  let component: AddAndRemoveControlComponent;
  let fixture: ComponentFixture<AddAndRemoveControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAndRemoveControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAndRemoveControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
