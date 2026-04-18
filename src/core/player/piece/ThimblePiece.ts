import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class ThimblePiece extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.THIMBLE, true);
  }
}
