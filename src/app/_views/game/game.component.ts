import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameCard } from 'src/app/_models/game-card.model';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnDestroy {

  public isGameOn: boolean = true;

  public cardDeck: GameCard[] = [];
  public currentTries: number = 0;
  public bestTries: number = 0;

  private gameStateSubscription: Subscription;

  constructor(private gameService: GameService) {
    this.gameStateSubscription = this.gameService.gameState$.subscribe(gameState => {
      this.isGameOn = gameState.cardDeck.length !== 0;
      this.cardDeck = gameState.cardDeck;
      this.currentTries = gameState.currentTries;
      this.bestTries = gameState.bestTries;
    })
  }

  ngOnDestroy(): void {
    this.gameStateSubscription.unsubscribe();
  }

  public onCardClicked(card: GameCard) {
    this.gameService.revealCard(card);
  }

  public onRestartGame() {
    this.gameService.startGame();
  }
}