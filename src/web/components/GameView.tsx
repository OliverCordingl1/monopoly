import { useGame } from "../context/GameContext";

interface GameViewProps {
  className?: string;
}

export const GameView = ({ className }: GameViewProps) => {
  const { gameState, startNewGame } = useGame();

  return (
    <div className={className}>
      <h2 className="font-board text-xl font-semibold">Game Info</h2>
      <button
        onClick={startNewGame}
        className="font-instructions bg-blue-dark hover:bg-blue-dark-accent cursor-pointer text-white px-4 py-2"
      >
        Start game
      </button>
      <ul>
        <li>
          <strong className="font-semibold">Game running:</strong>{" "}
          {gameState.isRunning ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  );
};
