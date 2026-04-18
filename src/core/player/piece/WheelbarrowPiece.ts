import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class Wheelbarrow extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.WHEELBARROW, true);
  }
}
