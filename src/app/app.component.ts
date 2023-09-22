import { Component, OnInit } from '@angular/core';
import { VagaService } from './services/vaga.service';
import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;


}
