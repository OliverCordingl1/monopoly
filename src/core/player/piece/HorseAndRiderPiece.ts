import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class HorseAndRiderPiece extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.HORSE_AND_RIDER, true);
  }
}
