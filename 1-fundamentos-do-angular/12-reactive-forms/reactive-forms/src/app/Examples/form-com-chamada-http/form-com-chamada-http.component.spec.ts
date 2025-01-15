import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComChamadaHttpComponent } from './form-com-chamada-http.component';

describe('FormComChamadaHttpComponent', () => {
  let component: FormComChamadaHttpComponent;
  let fixture: ComponentFixture<FormComChamadaHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComChamadaHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormComChamadaHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
