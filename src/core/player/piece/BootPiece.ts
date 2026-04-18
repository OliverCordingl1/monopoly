import { PlayerPiece, PlayerPieceModel } from "./PlayerPiece";

export class BootPiece extends PlayerPiece {
  constructor() {
    super(PlayerPieceModel.BOOT, true);
  }
}
