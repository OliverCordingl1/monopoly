import { GameConfigIdentifier, gameConfigSettings } from "../config";
import { DiceManager } from "../dice/DiceManager";
import { DefaultRandomSource } from "../rng/DefaultRandomSource";
import { type RandomSource } from "../rng/RandomSource";
import { CoreEventMap, EventManager } from "./EventManager";

interface GameOptions {
  randomSource?: RandomSource;
}

interface GameEventMap extends CoreEventMap {
  started: void;
  reset: void;
}

export class Game extends EventManager<GameEventMap> {
  private diceManager: DiceManager;
  private randomSource: RandomSource;
  private running: boolean = false;

  constructor(options?: GameOptions) {
    super();
    this.randomSource = options?.randomSource ?? new DefaultRandomSource();

    this.diceManager = new DiceManager(this.randomSource);
  }

  init(): void {
    this.resetDiceManager();
  }

  start(): void {
    this.running = true;
    this.emit("started");
  }

  isRunning(): boolean {
    return this.running;
  }

  getDiceManager(): DiceManager {
    return this.diceManager;
  }

  private resetDiceManager(): void {
    this.diceManager.setDice(
      Number(gameConfigSettings[GameConfigIdentifier.NumberOfDice]),
    );
  }
}
