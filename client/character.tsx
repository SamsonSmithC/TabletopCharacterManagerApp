import { AbilityScoreSpreadInterface, CharacterInterface, WellnessInterface} from "./characterInterfaces"

export default class Character {
  name: string
  level: number
  charClass: string
  proficiency: number
  abilityScores: AbilityScoreSpreadInterface
  wellness: WellnessInterface

  constructor (props?: CharacterInterface) {
    if (props && props.name) { this.name = props.name} else { this.name = 'nameless' }
    if (props && props.level) { this.level = props.level} else { this.level = 1 }
    if (props && props.charClass) { this.charClass = props.charClass } else { this.charClass = 'Classless'}
    if (props && props.abilityScores) { this.abilityScores = props.abilityScores } else {
      this.abilityScores = { 
        strength: {score: 10, proficient: 0},
        dexterity: {score: 10, proficient: 0},
        constitution: {score: 10, proficient: 0},
        intelligence: {score: 10, proficient: 0},
        wisdom: {score: 10, proficient: 0},
        charisma: {score: 10, proficient: 0}
      }
    }
    if (props && props.wellness) { this.wellness = props.wellness } else { 
      this.wellness = {
        curHP: 100,
        maxHP: 100,
        tmpHP: 0,
        armor: 10,
        death: {
          pass: 0,
          fail: 0
        }
      }
    }
    this.proficiency = this.calcProfFromLevel()
  }

  calcProfFromLevel(level: number = this.level): number {
    if (level >= 1 && level <= 4) { return 2 }
    if (level >= 5 && level <= 8) { return 3 }
    if (level >= 9 && level <= 12) { return 4 }
    if (level >= 13 && level <= 16) { return 5 }
    if (level >= 17 && level <= 20) { return 6 }
    console.error(`Invalid Level: '${level}' must be an integer 1 through 20`)
    return -1
  }
}
