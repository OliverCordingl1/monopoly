import { RandomSource } from "./RandomSource";

export class DefaultRandomSource implements RandomSource {
  next(): number {
    return Math.random();
  }
}
