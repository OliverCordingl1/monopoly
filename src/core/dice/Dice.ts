import { RandomSource } from "../rng/RandomSource";

export type DiceRollResult = number;

export class Dice {
  constructor(private rng: RandomSource) {}

  roll(): DiceRollResult {
    return Math.floor(this.rng.next() * 6) + 1;
  }
}
