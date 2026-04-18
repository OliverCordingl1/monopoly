export interface RandomSource {
  next(): number;
}

export class RandomSourceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RandomSourceError";
  }
}
