import { Action, createReducer, on } from '@ngrx/store';
import { GameState } from 'src/app/_models/game-state.model';
import * as GameStateActions from './game-state.actions';

export const initialState: GameState = {
    cardDeck: [],
    bestTries: 0,
    currentTries: 0
};

const _gameStateReducer = createReducer(
    initialState,
    on(GameStateActions.setCardDeck, (state, {deck}) => ({...state, cardDeck: deck})),
    on(GameStateActions.setBestTries, (state, {tries}) => ({ ...state, bestTries: tries })),
    on(GameStateActions.setCurrentTries, (state, {tries}) => ({ ...state, currentTries: tries })),
    on(GameStateActions.resetGame, (state, {deck}) => ({ ...state, cardDeck: deck, currentTries: 0}))
);
  
  export function reducer(state: GameState | undefined, action: Action) {
    return _gameStateReducer(state, action);
  }