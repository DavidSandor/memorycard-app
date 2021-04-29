import { createAction, props } from '@ngrx/store';
import { GameCard } from 'src/app/_models/game-card.model';
import { GameState } from 'src/app/_models/game-state.model';

export const setFullGameState = createAction('SET_FULL_GAMESTATE', props<{gameState: GameState}>());
export const setBestTries = createAction('SET_BEST_TRIES', props<{tries: number}>());
export const setCurrentTries = createAction('SET_CURRENT_TRIES', props<{tries: number}>());
export const resetGame = createAction('RESET_GAME', props<{deck: GameCard[]}>());
export const flipCard = createAction('FLIP_CARD', props<{cardId: number, isRevealed: boolean}>());
export const matchCards = createAction('MATCH_CARDS', props<{cardName: string}>());