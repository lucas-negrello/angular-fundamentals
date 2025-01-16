import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoAComponent } from './filho-a.component';

describe('FilhoAComponent', () => {
  let component: FilhoAComponent;
  let fixture: ComponentFixture<FilhoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilhoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
