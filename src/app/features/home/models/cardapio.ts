export class Cardapio {
  constructor(
    public id: number,
    public imagem: string,
    public nome_prato: string,
    public descricao: string,
    public preco: number
  ) {}
}