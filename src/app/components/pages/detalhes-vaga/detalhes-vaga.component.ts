import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/Vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-detalhes-vaga',
  templateUrl: './detalhes-vaga.component.html',
  styleUrls: ['./detalhes-vaga.component.css']
})
export class DetalhesVagaComponent implements OnInit {

  vaga?: Vaga;

  constructor(private route: ActivatedRoute, private vagaService: VagaService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('idVaga'));

    this.vagaService.getById(id).subscribe(vaga => {
      this.vaga = vaga;
    });

  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
