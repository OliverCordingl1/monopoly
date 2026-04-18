import { Dice, DiceRollResult } from "../src/core/dice/Dice";
import { DiceManager } from "../src/core/dice/DiceManager";
import { FakeRandomSource } from "../src/core/rng/FakeRandomSource";
import { NonEmptyArray } from "../src/types";

type DiceRollTestCase = [number, DiceRollResult];
type DiceRollTestCases = Array<DiceRollTestCase>;

const diceRollExpectedValues: DiceRollTestCases = [
  [0, 1],
  [0.25, 2],
  [0.5, 4],
  [0.75, 5],
  [0.9999, 6],
];

const diceRollInputs = diceRollExpectedValues.map(
  ([input]) => input,
) as NonEmptyArray<number>;

describe("test dice", () => {
  let fakeRng = new FakeRandomSource(diceRollInputs);
  let dice: Dice;

  it("dice instantiates with fake rng", () => {
    dice = new Dice(fakeRng);

    expect(dice).toBeInstanceOf(Dice);
  });

  describe("run rng inputs through dice roll", () => {
    it.each(diceRollExpectedValues)(
      'should roll rng input "%s" to "%s"',
      (rngOutput, expectedRoll) => {
        const rollResult = dice.roll();
        expect(rollResult).toBe(expectedRoll);
      },
    );
  });
});

describe("test dice manager", () => {
  let fakeRng = new FakeRandomSource(diceRollInputs);
  let diceManager: DiceManager;

  beforeEach(() => {
    fakeRng = new FakeRandomSource(diceRollInputs);
    diceManager = new DiceManager(fakeRng);
  });

  it("should add dice to the manager", () => {
    diceManager.setDice(3);
    expect(diceManager.getDiceCount()).toBe(3);
  });

  it("should roll all dice and return correct total and rolls", () => {
    diceManager.setDice(2);
    const rollResult = diceManager.rollAll();

    expect(rollResult.total).toBe(3);
    expect(rollResult.rolls).toEqual([1, 2]);
  });
});
