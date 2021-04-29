import { Component, OnInit } from '@angular/core';
import { GameCard } from 'src/app/_models/game-card.model';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public isGameOn: boolean = true;

  public cardDeck: GameCard[] = [];

  constructor(private gameService: GameService) {
    this.gameService.gameState$.subscribe(gameState => {
      this.cardDeck = gameState.cardDeck;
      this.isGameOn = gameState.cardDeck.length !== 0;
    })
  }

  ngOnInit(): void {
  }

  public onCardClicked(card: GameCard) {
    this.gameService.revealCard(card);
  }

  public onRestartGame() {
    this.gameService.startGame();
  }
}