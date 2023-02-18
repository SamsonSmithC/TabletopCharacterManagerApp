import React from 'react'
import PropTypes from 'prop-types'

import { Stack, Grid, Card, CardHeader, CardContent, Button, ButtonGroup} from '@mui/material'

interface DieRollerStats {
  rollName: string
  dieSize: number
  modifier: number
}

interface DieRollerProps {
  dieRollerStats: DieRollerStats
  setDieRoller: (rollName: string, dieSize: number, modifier: number) => void
}

export default function DieRoller(props: DieRollerProps): React.ReactElement {
  const {dieRollerStats, setDieRoller}: DieRollerProps = props
  const {rollName, dieSize, modifier}: DieRollerStats = dieRollerStats
  const [rollResult, setRollResult] = React.useState( 20 )


  const setDieRollerD20 = () => {
    setDieRoller('Basic D20', 20, 0)
  }
  const setDieRollerD12 = () => {
    setDieRoller('Basic D12', 12, 0)
  }
  const setDieRollerD10 = () => {
    setDieRoller('Basic D10', 10, 0)
  }
  const setDieRollerD8 = () => {
    setDieRoller('Basic D8', 8, 0)
  }
  const setDieRollerD6 = () => {
    setDieRoller('Basic D6', 6, 0)
  }
  const setDieRollerD4 = () => {
    setDieRoller('Basic D4', 4, 0)
  }

  const rollDie = () => {
    setRollResult(Math.floor(Math.random() * (dieSize)) + modifier + 1)
  }

  const modifierToStr = (modifier: number): string => {
    if (modifier >= 0) return (`+${modifier}`)
    return (`${modifier}`)
  }

  const rollHeader = 
    <Stack direction='row' justifyContent='space-between'>
      <Grid item>
        Die Roller
      </Grid>
      <Grid item>
        {`Result: ${rollResult}`}
      </Grid>
    </Stack>

  const rollSubHeader =
    <Stack direction='row' justifyContent='space-between'>
      <Grid item>
        {rollName}
      </Grid>
      <Grid item>
      {`D${dieSize} ${modifierToStr(modifier)}`}
      </Grid>
    </Stack>

  return (
    <Card>
      <CardHeader title={rollHeader} subheader={rollSubHeader}></CardHeader>
      <CardContent>
        
      <Button fullWidth variant='outlined' onClick={rollDie}>
            Roll
          </Button>
        <ButtonGroup variant='outlined' fullWidth>
          <Button onClick={setDieRollerD20}>D20</Button>
          <Button onClick={setDieRollerD12}>D12</Button>
          <Button onClick={setDieRollerD10}>D10</Button>
          <Button onClick={setDieRollerD8}>D8</Button>
          <Button onClick={setDieRollerD6}>D6</Button>
          <Button onClick={setDieRollerD4}>D4</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  )
}