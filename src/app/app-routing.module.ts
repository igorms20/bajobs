import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DetalhesVagaComponent } from './components/pages/detalhes-vaga/detalhes-vaga.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vaga/:idVaga', component: DetalhesVagaComponent},
  {path: 'sobre', component: SobreComponent}
  // {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
