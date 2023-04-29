import { ToastrService } from "ngx-toastr";

    private toastr: ToastrService,

  private notificarSucesso(cardapio: Cardapio[]): void {
    this.state.cardapio.next(cardapio);
    this.toastr.success('Lista de cardápio carregada com sucesso.');
  }
  
  private notificarErro(erro: any): Observable<never> {
    this.toastr.error('Oops... Algo deu errado.');
    return EMPTY;
  }
