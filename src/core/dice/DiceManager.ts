import { RandomSource } from "../rng/RandomSource";
import { Dice, type DiceRollResult } from "./Dice";

type MultipleDiceRollResult = {
  total: number;
  isAllRollsIdentical: boolean;
  rolls: Array<DiceRollResult>;
};

export class DiceManager {
  private dice: Dice[] = [];

  constructor(private rng: RandomSource) {}

  setDice(count: number = 2): void {
    this.dice = [];
    for (let i = 0; i < count; i++) {
      this.dice.push(new Dice(this.rng));
    }
  }

  getDiceCount(): number {
    return this.dice.length;
  }

  rollAll(): MultipleDiceRollResult {
    const rolls = this.dice.map((dice) => dice.roll());
    const total = rolls.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
    );

    const isAllRollsIdentical = rolls.every((roll) => roll === rolls[0]);

    return {
      total,
      isAllRollsIdentical,
      rolls,
    };
  }
}
