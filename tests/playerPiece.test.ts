import { BattleshipPiece } from "../src/core/player/piece/BattleshipPiece";
import { BootPiece } from "../src/core/player/piece/BootPiece";
import { CannonPiece } from "../src/core/player/piece/CannonPiece";
import { CatPiece } from "../src/core/player/piece/CatPiece";
import { HorseAndRiderPiece } from "../src/core/player/piece/HorseAndRiderPiece";
import { Iron } from "../src/core/player/piece/IronPiece";
import { Penguin } from "../src/core/player/piece/PenguinPiece";
import { PlayerPiece } from "../src/core/player/piece/PlayerPiece";
import { RacecarPiece } from "../src/core/player/piece/RacecarPiece";
import { RubberDuckPiece } from "../src/core/player/piece/RubberDuckPiece";
import { ScottishTerrierPiece } from "../src/core/player/piece/ScottishTerrierPiece";
import { ThimblePiece } from "../src/core/player/piece/ThimblePiece";
import { TopHatPiece } from "../src/core/player/piece/TopHatPiece";
import { TRexPiece } from "../src/core/player/piece/TRexPiece";
import { Wheelbarrow } from "../src/core/player/piece/WheelbarrowPiece";

type PieceTestCase = {
  name: string;
  PieceClass: new () => PlayerPiece;
  model: string;
  legacy: boolean;
};

const pieceCases: PieceTestCase[] = [
  {
    name: "Racecar",
    PieceClass: RacecarPiece,
    model: "Racecar",
    legacy: false,
  },
  { name: "Top Hat", PieceClass: TopHatPiece, model: "Top Hat", legacy: false },
  {
    name: "Scottish Terrier",
    PieceClass: ScottishTerrierPiece,
    model: "Scottish Terrier",
    legacy: false,
  },
  { name: "Cat", PieceClass: CatPiece, model: "Cat", legacy: false },
  {
    name: "Battleship",
    PieceClass: BattleshipPiece,
    model: "Battleship",
    legacy: false,
  },
  { name: "Penguin", PieceClass: Penguin, model: "Penguin", legacy: false },
  {
    name: "Rubber Duck",
    PieceClass: RubberDuckPiece,
    model: "Rubber Duck",
    legacy: false,
  },
  { name: "T-Rex", PieceClass: TRexPiece, model: "T-Rex", legacy: false },
  { name: "Thimble", PieceClass: ThimblePiece, model: "Thimble", legacy: true },
  { name: "Iron", PieceClass: Iron, model: "Iron", legacy: true },
  {
    name: "Wheelbarrow",
    PieceClass: Wheelbarrow,
    model: "Wheelbarrow",
    legacy: true,
  },
  { name: "Boot", PieceClass: BootPiece, model: "Boot", legacy: true },
  { name: "Cannon", PieceClass: CannonPiece, model: "Cannon", legacy: true },
  {
    name: "Horse and Rider",
    PieceClass: HorseAndRiderPiece,
    model: "Horse and Rider",
    legacy: true,
  },
];

describe("testing player pieces", () => {
  describe.each(pieceCases)("$name", ({ PieceClass, model, legacy }) => {
    let piece: PlayerPiece;

    beforeEach(() => {
      piece = new PieceClass();
    });

    it("should instantiate a piece", () => {
      expect(piece).toBeInstanceOf(PieceClass);
    });

    it("should have the correct model", () => {
      expect(piece.getModel()).toBe(model);
    });

    it("should have the correct legacy status", () => {
      expect(piece.isLegacyPiece()).toBe(legacy);
    });
  });
});
