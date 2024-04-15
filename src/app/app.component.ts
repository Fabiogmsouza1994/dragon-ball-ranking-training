import { Component } from '@angular/core';
import { LutadoresService } from './services/lutadores-ranqueados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Z Power';

  constructor(private service: LutadoresService) {

  }

}
