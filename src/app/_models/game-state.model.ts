import { GameCard } from "./game-card.model";

export interface GameState {
    cardDeck: GameCard[];
    bestTries: number;
    currentTries: number;
}