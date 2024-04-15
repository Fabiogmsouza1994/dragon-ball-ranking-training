import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { TreinoComponent } from './components/treino/treino.component';

export const routes: Routes = [
  {path: '', redirectTo: 'ranking', pathMatch: 'full' },
  {path: 'ranking', component: RankingComponent },
  {path: 'treino', component: TreinoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
