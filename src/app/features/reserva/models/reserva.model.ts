export class ReservaConcluida {
  constructor(
    public id_reserva: number,
    public nome: string,
    public dia_reserva: string,
    public hora_reserva: string,
    public status: string,
    public numero_mesa: number,
    public total_pessoas: number,
    public itens_consumidos: ItensConsumidos[],
    public total_conta: number,
    public mostrar_detalhes: boolean
  ) {}
}

