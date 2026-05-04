export enum GameConfigIdentifier {
  StartingBankBalance = "startingBankBalance",
  NumberOfDice = "numberOfDice",

  DisallowLegacyPlayerPieces = "disallowLegacyPlayerPieces",
  DisallowDuplicatePlayerPieces = "disallowDuplicatePlayerPieces",

  DiceRollsCauseJailTime = "diceRollsCauseJailTime",
  NumberOfDiceRollsForJailTime = "numberOfDiceRollsForJailTime",
  BailAmount = "bailAmount",

  MinimumPlayerCount = "minimumPlayerCount",
}
export type GameConfigSetting = string | number | boolean;

type GameConfig = {
  [gameConfigIdentifier in GameConfigIdentifier]: GameConfigSetting;
};

export const gameConfigSettings: GameConfig = {
  startingBankBalance: 200,
  numberOfDice: 2,

  disallowLegacyPlayerPieces: false,
  disallowDuplicatePlayerPieces: true,

  diceRollsCauseJailTime: true,
  numberOfDiceRollsForJailTime: 3,
  bailAmount: 50,

  minimumPlayerCount: 2,
} as const;
