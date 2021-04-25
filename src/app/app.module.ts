import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RulesComponent } from './_views/rules/rules.component';
import { GameComponent } from './_views/game/game.component';
import { GameCardComponent } from './_components/game-card/game-card.component';
import { GameSettingsComponent } from './_components/game-settings/game-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    GameComponent,
    GameCardComponent,
    GameSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
