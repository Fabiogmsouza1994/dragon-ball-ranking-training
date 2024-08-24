import { Component, HostListener, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DadosTreino } from '../../models/dadostreino.model';
import { LutadoresService } from '../../services/lutadores-ranqueados.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  lutadores: any;
  responsiveMatches: boolean = false;

  constructor(
    private service: LutadoresService,
    private matDialog: MatDialog,
    private responsive: BreakpointObserver,
    public mediaMatcher: MediaMatcher
  ) { }

  ngOnInit(): void {
    this.service.todosLutadores().subscribe((lutador: DadosTreino[]) => {
      console.table(lutador);

      this.lutadores = lutador;

      this.lutadores.sort(function (a: any, b: any) {
        return b.valorTreino - a.valorTreino;
      });
    });

    const responsiveQueries: string[] = [`(min-width: 300px)`, `(max-width: 1023px)`, `(min-width: 1024px)`]

    this.responsive.observe(responsiveQueries)
        .subscribe((state: BreakpointState) => {
          if(state.breakpoints[`(min-width: 300px)`] && state.breakpoints[`(max-width: 1023px)`]) {
            this.responsiveMatches = false;
            console.log(this.responsiveMatches)

          }


          if(state.breakpoints[`(min-width: 1024px)`]) {
            this.responsiveMatches = true;
            console.log(this.responsiveMatches)
          }
        });
  }

  public innerWidth: any;

@HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth);
}

  removeSaiyan(lutador: DadosTreino): void {
    const dataProperties = {
      title: 'Deseja mesmo remover o lutador do Ranking?',
      content: 'Ao removê-lo, ele sairá permanentemente da lista.',
    };

    const dialog = this.matDialog.open(ConfirmationDialogComponent, {
      data: dataProperties
    });

    dialog.afterClosed().subscribe((removeItem: boolean) => {
      if (removeItem) {
        this.lutadores = this.lutadores.filter((a: any) => lutador.id !== a.id);
        this.service.remove(lutador.id).subscribe();
      }

    });
  }
}
