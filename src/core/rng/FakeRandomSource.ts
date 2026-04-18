import { NonEmptyArray } from "../../types";
import { RandomSource, RandomSourceError } from "./RandomSource";

export class FakeRandomSource implements RandomSource {
  private index: number = 0;

  constructor(private readonly values: NonEmptyArray<number>) {
    if (values.length === 0) {
      throw new RandomSourceError(
        "FakeRandomSource requires a non-empty array of numbers.",
      );
    }
  }

  next(): number {
    const value = this.values[this.index]!;
    this.index = (this.index + 1) % this.values.length;
    return value;
  }
}
