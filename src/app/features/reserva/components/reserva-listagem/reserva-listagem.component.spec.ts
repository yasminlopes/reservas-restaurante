import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaListagemComponent } from './reserva-listagem.component';

describe('ReservaListagemComponent', () => {
  let component: ReservaListagemComponent;
  let fixture: ComponentFixture<ReservaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
