import { Injectable } from "@angular/core";
import { CardapioApiService } from "./services/cardapio-api.service";
import { CardapioState } from "./state/cardapio-state";
import { EMPTY, Observable, catchError, map, tap } from "rxjs";
import { Cardapio } from "./models/cardapio";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: 'root' })

export class HomeFacade {
  constructor(
    private cardapioApiService: CardapioApiService,
    private state: CardapioState,
    private toastr: ToastrService,
    ) {}

  public cardapio$ = this.state.cardapio;

  public listarCardapio(): void {
    this.cardapioApiService.listarCardapio().pipe(
      map((resposta) => resposta),
      catchError((erro) => this.notificarErro(erro))
      ).subscribe((cardapio: Cardapio[]) => {
      this.notificarSucesso(cardapio)
    });
  }

  private notificarSucesso(cardapio: Cardapio[]): void {
    this.state.cardapio.next(cardapio);
    this.toastr.success('Lista de cardápio carregada com sucesso.');
  }
  
  private notificarErro(erro: any): Observable<never> {
    this.toastr.error('Oops... Algo deu errado.');
    return EMPTY;
  }
  
  
}