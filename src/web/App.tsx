import { GameView } from "./components/GameView";
import { PageContainer } from "./components/PageContainer";
import { GameProvider } from "./context/GameContext";

export function App() {
  return (
    <GameProvider>
      <PageContainer>
        <h1 className="text-4xl font-board font-semibold">Monopoly</h1>

        <GameView className="mt-4" />
      </PageContainer>
    </GameProvider>
  );
}
