import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Game } from "../../core/game/Game";
import { type GameState, readGameState } from "../../core/game/GameState";

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameContextContent {
  game: Game;
  gameState: GameState;

  startNewGame(): void;
}

export const GameContext = createContext<GameContextContent | undefined>(
  undefined,
);

export const GameProvider = ({ children }: GameProviderProps) => {
  const game = useRef(new Game());
  const [gameState, setGameState] = useState<GameState>(
    readGameState(game.current),
  );

  useEffect(() => {
    return game.current.on("tick", () => {
      alert("game start");
      setGameState(readGameState(game.current));
    });
  }, []);

  const startNewGame = () => {
    game.current.start();
  };

  if (!game.current) return null;

  return (
    <GameContext.Provider
      value={{ game: game.current, gameState, startNewGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("`useGame` must be used within a `GameProvider`");
  }

  return context;
};
