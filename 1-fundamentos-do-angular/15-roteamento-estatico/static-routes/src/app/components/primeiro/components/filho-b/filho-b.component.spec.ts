import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoBComponent } from './filho-b.component';

describe('FilhoBComponent', () => {
  let component: FilhoBComponent;
  let fixture: ComponentFixture<FilhoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilhoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
