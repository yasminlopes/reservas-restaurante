import { Injectable } from "@angular/core";
import { ReservasState } from "./state/reserva.state";
import { ReservaApiService } from "./services/reserva-api.service";
import { ToastrService } from "ngx-toastr";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { ReservaConcluida } from "./models/reserva.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class ReservaFacade {
  constructor(
    private reservaApiService: ReservaApiService,
    private state: ReservasState,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public reservasCliente$ = this.state.reservasCliente;
  public ultimasReservas$ = this.state.ultimasReservas;

  public listarReservas(): void {
    this.reservaApiService.listarTodasReservas().pipe(
      map((resposta) => resposta),
      catchError((erro) => this.notificarErro(erro))
      ).subscribe((reservas: ReservaConcluida[]) => {
        this.state.reservasCliente.next(reservas)
    })
  }

  public listarUltimasReservas(){
    this.reservaApiService.listarTodasReservas().subscribe((reservas) => {
      const ultimasReservas = reservas.slice(-3)
      this.state.ultimasReservas.next(ultimasReservas)
    })
  }

  private notificarErro(erro: any): Observable<never> {
    this.toastr.error('Oops... Algo deu errado.');
    return EMPTY;
  }

  public navegarParaCriarReserva(){
    this.router.navigateByUrl('/criar-reserva')
  }

  public mostrarDetalhes(reserva: ReservaConcluida) {
    return reserva.mostrar_detalhes = !reserva.mostrar_detalhes
 }

}