import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/Vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private vagaService: VagaService) { }

  vagas: Vaga[] = [];
  vagasFiltradas: Vaga[] = [];
  locais: string[] = this.vagaService.getLocais();
  localSelecionado: string = '';

  ngOnInit(): void {
    this.getData();
    console.log(this.localSelecionado);
  }

  async getData(): Promise<void> {
    await this.vagaService.getAll().forEach(vagas => vagas.forEach(vaga => this.vagas.push(vaga)));
    this.vagasFiltradas = this.vagas;

  }

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;

    this.vagasFiltradas = this.vagas.filter(vaga =>
      vaga.titulo.toLowerCase().includes(input.value) || vaga.titulo.includes(input.value));
  }

  handleLocalInput(e: Event) {
    const target = e.target as HTMLSelectElement;

    if (target.value === 'all') {
      this.vagasFiltradas = this.vagas;
      return;
    }

    this.vagasFiltradas = this.vagas.filter(vaga => {
      return vaga.local === target.value;
    })

    console.log(target.value);

  }



}
