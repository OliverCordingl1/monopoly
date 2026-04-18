export enum PlayerPieceModel {
  RACECAR = "Racecar",
  TOP_HAT = "Top Hat",
  SCOTTISH_TERRIER = "Scottish Terrier",
  CAT = "Cat",
  BATTLESHIP = "Battleship",
  PENGUIN = "Penguin",
  RUBBER_DUCK = "Rubber Duck",
  T_REX = "T-Rex",
  THIMBLE = "Thimble",
  IRON = "Iron",
  WHEELBARROW = "Wheelbarrow",
  BOOT = "Boot",
  CANNON = "Cannon",
  HORSE_AND_RIDER = "Horse and Rider",
}

export abstract class PlayerPiece {
  private readonly model: PlayerPieceModel;
  private readonly legacyPiece: boolean;

  protected constructor(model: PlayerPieceModel, legacyPiece: boolean = false) {
    this.model = model;
    this.legacyPiece = legacyPiece;
  }

  getModel(): PlayerPieceModel {
    return this.model;
  }

  isLegacyPiece(): boolean {
    return this.legacyPiece;
  }
}
