import { NovaTranferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { Component } from '@angular/core';
import { TransferenciaService } from './Services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}

}
