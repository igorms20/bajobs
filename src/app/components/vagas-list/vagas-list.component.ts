import { Component, Input } from '@angular/core';
import { Vaga } from 'src/app/Vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent  {

  @Input() vagasFiltradas: Vaga[] = [];

  jobs: boolean = true;

  constructor(private vagaService: VagaService) {}

  toggleJobs() {
    this.vagaService.getAll().subscribe(vagas => {
      if (vagas.length === 0) {
        this.jobs = false;
      }
    })
  }









}
