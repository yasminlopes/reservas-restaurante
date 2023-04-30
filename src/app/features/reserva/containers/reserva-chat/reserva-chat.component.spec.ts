import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaChatComponent } from './reserva-chat.component';

describe('ReservaChatComponent', () => {
  let component: ReservaChatComponent;
  let fixture: ComponentFixture<ReservaChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
