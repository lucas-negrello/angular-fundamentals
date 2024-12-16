import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTextoComponent } from './comp-texto.component';

describe('CompTextoComponent', () => {
  let component: CompTextoComponent;
  let fixture: ComponentFixture<CompTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompTextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
