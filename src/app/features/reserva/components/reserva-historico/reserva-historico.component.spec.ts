import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHistoricoComponent } from './reserva-historico.component';

describe('ReservaHistoricoComponent', () => {
  let component: ReservaHistoricoComponent;
  let fixture: ComponentFixture<ReservaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
