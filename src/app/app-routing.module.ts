import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './_views/game/game.component';
import { RulesComponent } from './_views/rules/rules.component';

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: 'rules', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
