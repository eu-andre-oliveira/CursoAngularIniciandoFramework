import { Router, RouterModule } from '@angular/router';
import { TransferenciaService } from './../Services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: Number;
  destino: string;
  descricaoTransacao: string | undefined;
  agencia: Number | undefined;
  chavePix: string | undefined;

  constructor(private service: TransferenciaService, private router : Router) {}

  transferir() {
    console.log('Solicitada nova transferencia:');

    const valoresEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      descricaoTransacao: this.descricaoTransacao,
      chavePix: this.chavePix,
      agencia: this.agencia,
    };

    this.service.adicionar(valoresEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');

      },
      (error) => {
        console.log();
      }
    );
  }
  limparCampos() {
    this.valor = 0;
    this.descricaoTransacao = '';
    this.destino = '';
    this.chavePix = '';
    this.agencia = 0;
  }
}
