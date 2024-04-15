import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DadosTreino } from '../../models/dadostreino.model';
import { LutadoresService } from '../../services/lutadores-ranqueados.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  lutadores: any;

  constructor(
    private service: LutadoresService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.todosLutadores().subscribe((lutador: DadosTreino[]) => {
      console.table(lutador);

      this.lutadores = lutador;

      this.lutadores.sort(function (a: any, b: any) {
        return b.lutador - a.lutador;
      });
    });
  }

  removeSaiyan(lutador: DadosTreino): void {
    const dataProperties = {
      title: 'Deseja mesmo remover o lutador do Ranking?',
      content: 'Ao removê-lo, ele sairá permanentemente da lista.',
    };

    const dialog = this.matDialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-modalbox',
      data: dataProperties,
    });

    dialog.afterClosed().subscribe((removeItem: boolean) => {
      if (removeItem) {
        this.lutadores = this.lutadores.filter((a: any) => lutador.id !== a.id);
        this.service.remove(lutador.id).subscribe();
      }

    });
  }

  /*
  ngOnInit(): void {
    this.service.todosLutadores().subscribe.((lutador: DadosTreino[]) => {

      console.table(lutador);
      this.lutadores = lutador;

      this.lutadores.sort(function (a : any, b : any){
      return b.lutador - a.lutador;
      })
    });
  }
  */
}
