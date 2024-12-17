import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLineComponent } from './card-line.component';

describe('CardLineComponent', () => {
  let component: CardLineComponent;
  let fixture: ComponentFixture<CardLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLineComponent]
    });
    fixture = TestBed.createComponent(CardLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
