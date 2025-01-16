import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponent } from './primeiro.component';

describe('PrimeiroComponent', () => {
  let component: PrimeiroComponent;
  let fixture: ComponentFixture<PrimeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
