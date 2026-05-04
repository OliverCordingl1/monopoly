import type { Game } from "./Game";

export interface GameState {
  // vitals
  isRunning: boolean;
}

export const readGameState = (game: Game): GameState => ({
  isRunning: game.isRunning(),
});
