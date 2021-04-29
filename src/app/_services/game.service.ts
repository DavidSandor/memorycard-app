import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameCard } from '../_models/game-card.model';
import { GameState } from '../_models/game-state.model';
import { flipCard, matchCards, resetGame } from '../_store/game-state/game-state.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly cardNames: string[] = [
    "angular.png",
    "d3.png",
    "javascript.png",
    "jenkins.png",
    "postcss.png",
    "react.png",
    "redux.png",
    "sass.png",
    "ts.png",
    "webpack.png"
  ]

  public gameState$: Observable<GameState>;

  private currentDeck: GameCard[] = [];

  constructor(private store: Store<{ gameState: GameState }>) {
    this.gameState$ = this.store.select('gameState');

    this.gameState$.subscribe(gameState => {
      this.currentDeck = [...gameState.cardDeck];     
    })

    this.startGame(6);
  }
  
  public startGame(deckSize: number): void {
    const deck = this.initDeck(deckSize);
    const randomDeck = this.randomizeDeck(deck);
    this.store.dispatch(resetGame({deck: randomDeck}));
  }

  public revealCard(card: GameCard) {
    if(!card.isMatched && this.getRevealedCards().length < 2) {

      this.store.dispatch(flipCard({cardId: card.id, isRevealed: true}));

      if(this.getRevealedCards().length > 1) {

        this.checkForMatch(card);

        this.checkGameOver();

        this.getRevealedCards().forEach(revCard => {
          setTimeout(() => {
            this.store.dispatch(flipCard({cardId: revCard.id, isRevealed: false}));
          }, 2000);
        })
      }
    }
  }

  private initDeck(deckSize: number): GameCard[] {
    
    const names = [...this.cardNames].splice(0, deckSize / 2);

    const deck: GameCard[] = names.map((name, index) => ({
      id: index,
      cardName: name,
      isRevealed: false,
      isMatched: false
    }));

    return [...deck, ...deck.map(card => ({...card, id: card.id + deck.length}))];
  }

  private randomizeDeck(deck: GameCard[]): GameCard[] {
    return [...deck].sort(() => 0.5 - Math.random());
  }

  private checkForMatch(card: GameCard) {
    const cardName = card.cardName;

    if(this.getRevealedCards().length > 1 && this.getRevealedCards().every(card => card.cardName === cardName)) {
      this.store.dispatch(matchCards({cardName}));
    }
  }

  // Get revealed but not matched cards
  private getRevealedCards(): GameCard[] {
    return this.currentDeck.filter(card => card.isRevealed && !card.isMatched);
  }

  private checkGameOver(): boolean {
    return this.currentDeck.every(card => card.isMatched === true);
  }
}