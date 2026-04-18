import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class Iron extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.IRON, true);
  }
}
