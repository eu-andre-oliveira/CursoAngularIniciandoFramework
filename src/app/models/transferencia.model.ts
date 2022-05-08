export interface Transferencia {
  id?: string;
  valor: Number;
  destino: string;
  data?: Date;
  descricaoTransacao: string;
  agencia: Number;
  chavePix: string;
}
