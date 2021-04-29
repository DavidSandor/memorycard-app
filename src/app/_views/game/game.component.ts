import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameCard } from 'src/app/_models/game-card.model';
import { GameService } from 'src/app/_services/game.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public isGameOn: boolean = true;

  public cardDeck: GameCard[] = [];

  private gameStateSubscription: Subscription;

  constructor(private gameService: GameService, private storageService: StorageService) {
    this.gameStateSubscription = this.gameService.gameState$.subscribe(gameState => {
      this.cardDeck = gameState.cardDeck;
      this.isGameOn = gameState.cardDeck.length !== 0;
      storageService.storeGameState(gameState);
    })
  }

  ngOnInit(): void {
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