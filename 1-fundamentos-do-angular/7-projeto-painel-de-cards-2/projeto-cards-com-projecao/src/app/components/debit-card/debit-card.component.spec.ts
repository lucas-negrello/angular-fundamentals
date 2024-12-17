import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardComponent } from './debit-card.component';

describe('DebitCardComponent', () => {
  let component: DebitCardComponent;
  let fixture: ComponentFixture<DebitCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebitCardComponent]
    });
    fixture = TestBed.createComponent(DebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
