import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class CannonPiece extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.CANNON, true);
  }
}
