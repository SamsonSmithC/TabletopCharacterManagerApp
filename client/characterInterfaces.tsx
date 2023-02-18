export interface AbilityScoreInterface {
  score: number,
  proficient: number
 }
 
 export interface AbilityScoreSpreadInterface {
  strength: AbilityScoreInterface
  dexterity: AbilityScoreInterface
  constitution: AbilityScoreInterface
  intelligence: AbilityScoreInterface
  wisdom: AbilityScoreInterface
  charisma: AbilityScoreInterface
}

export interface WellnessInterface {
  curHP: number,
  maxHP: number,
  tmpHP: number,
  armor: number,
  death: {
      pass: number,
      fail: number
  }
 }

export interface CharacterInterface {
  name: string,
  level: number,
  charClass: string,
  wellness: WellnessInterface,
  abilityScores: AbilityScoreSpreadInterface
}