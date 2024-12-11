import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfosCardComponent } from './client-infos-card.component';

describe('ClientInfosCardComponent', () => {
  let component: ClientInfosCardComponent;
  let fixture: ComponentFixture<ClientInfosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientInfosCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInfosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
