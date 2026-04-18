import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class BattleshipPiece extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.BATTLESHIP);
  }
}
