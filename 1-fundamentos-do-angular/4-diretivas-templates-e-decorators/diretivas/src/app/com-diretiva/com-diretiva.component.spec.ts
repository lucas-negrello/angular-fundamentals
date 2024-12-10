import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDiretivaComponent } from './com-diretiva.component';

describe('ComDiretivaComponent', () => {
  let component: ComDiretivaComponent;
  let fixture: ComponentFixture<ComDiretivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComDiretivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
