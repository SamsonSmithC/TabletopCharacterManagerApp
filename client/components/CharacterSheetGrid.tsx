import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@mui/material'

import AbilityScoreBar from './AbilityScoreBar'
import Character from '../character'

import DieRoller from './DieRoller'
import LifeStats from './LifeStats'
import BasicInfo from './BasicInfo'

interface CharacterSheetGridProps {
  playerChar: Character
  setDieRoller: (rollName: string, dieSize: number, modifier: number) => void
  dieRollerStats: DieRollerStats
}

interface DieRollerStats {
  rollName: string
  dieSize: number
  modifier: number
}

export default function CharacterSheetGrid(props: CharacterSheetGridProps): React.ReactElement {
  const {playerChar, setDieRoller, dieRollerStats}: CharacterSheetGridProps = props
    
  return (
    <Grid container rowSpacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BasicInfo name={playerChar.name} level={playerChar.level} charClass={playerChar.charClass}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <LifeStats wellness={playerChar.wellness}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <DieRoller dieRollerStats={dieRollerStats} setDieRoller={setDieRoller}/>
        </Grid>
      </Grid>
      <AbilityScoreBar abilityScores={playerChar.abilityScores} proficiency={playerChar.proficiency} setDieRoller={setDieRoller}/>
    </Grid>
  )
}