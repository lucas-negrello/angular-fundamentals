import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfosCardComponent } from './client-infos-card.component';

describe('ClientInfosCardComponent', () => {
  let component: ClientInfosCardComponent;
  let fixture: ComponentFixture<ClientInfosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientInfosCardComponent]
    });
    fixture = TestBed.createComponent(ClientInfosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
