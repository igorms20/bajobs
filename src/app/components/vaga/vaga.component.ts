import { Component, Input } from '@angular/core';
import { Vaga } from 'src/app/Vaga';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent {

  @Input() vaga?: Vaga;

}
