import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemDiretivaComponent } from './sem-diretiva.component';

describe('SemDiretivaComponent', () => {
  let component: SemDiretivaComponent;
  let fixture: ComponentFixture<SemDiretivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemDiretivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
