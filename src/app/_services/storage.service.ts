import { Injectable } from '@angular/core';
import { GameState } from '../_models/game-state.model';

enum StorageVars {
  GameState = 'memCardApp_gameState'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public storeGameState(gameState: GameState): void {
    localStorage.setItem(StorageVars.GameState, JSON.stringify(gameState));
  }

  public getGameState(): GameState {

    const data = localStorage.getItem(StorageVars.GameState);
    const state: GameState = data ? JSON.parse(data) : null;

    return state;
  }
}
