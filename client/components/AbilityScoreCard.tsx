import React from 'react'
import PropTypes from 'prop-types'

import { Button, Stack, Grid, Card, CardHeader, CardContent } from '@mui/material'

import { AbilityScore } from '../characterInterfaces'

interface AbilityScoreCardProps {
  abilityName: string
  abilityScore: AbilityScore
  proficiency: number
  setDieRoller: (rollName: string, dieSize: number, modifier: number) => void
}

export default function AbilityScoreCard(props: AbilityScoreCardProps): React.ReactElement {
  const {abilityName, abilityScore, proficiency, setDieRoller}:AbilityScoreCardProps = props

  const setRollerToAbility = (): void => {
    setDieRoller(`${abilityName} Roll`, 20, scoreToModifier(abilityScore.score))
  }

  const setRollerToSave = (): void => {
    setDieRoller(`${abilityName} Save`, 20, scoreToModifier(abilityScore.score) + proficiency * abilityScore.proficient)
  }

  const profMultiplierToString = (proficientMultiplier: number): string => {
    switch(proficientMultiplier) {
      case 0:
        return ''
      case 1:
        return 'Proficient'
      case 2:
        return 'Expert'
      default: 
        console.error(`Invalid proficiency mulitplier: '${proficientMultiplier}' must be: 0, 1, or 2`)
        return ''
    }
  }

  const scoreToModifier = (score: number): number => {
    if ( score % 2 == 0) {
      return ( ( score / 2 ) - 5 )
    } 
    return ( ( ( score - 1 ) / 2 ) - 5)
  }

  const modifierToStr = (modifier: number): string => {
    if (modifier > 0) return (`+${modifier}`)
    return (`${modifier}`)
  }

  const scoreHeader = 
    <Stack direction='row' justifyContent='space-between' width={'100%'}>
      <Grid item>
        {`${abilityScore.score}`}
      </Grid>
      <Grid item>
      {`[ ${modifierToStr(scoreToModifier(abilityScore.score))} ]`}
      </Grid>
    </Stack>

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
        <Card variant={'outlined'}>
          <Button fullWidth onClick={setRollerToAbility}>
            <CardHeader title={scoreHeader} subheader={abilityName} style={ {minWidth: '80%'} }/>
          </Button>
          <Button fullWidth onClick={setRollerToSave}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  Saving Throw:
                </Grid>
                <Grid item xs={12}>
                  <Stack direction='row' justifyContent={'space-between'}>
                    <Grid item>
                      {`${modifierToStr(scoreToModifier(abilityScore.score) + proficiency * abilityScore.proficient)}`}
                    </Grid>
                    <Grid item>
                      {`${profMultiplierToString(abilityScore.proficient)}`}
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Button>
        </Card>
    </Grid>
  )
}