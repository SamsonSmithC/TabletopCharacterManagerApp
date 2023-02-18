import React from 'react'
import Axios from 'axios'

import Character from '../character'
import PageHeader from './PageHeader'
import CharacterSheetGrid from './CharacterSheetGrid'
import NewCharForm from './NewCharForm'
import { Container, CssBaseline } from '@mui/material'

export default function CharacterBuilder (): React.ReactElement {
  const [playerChar, setPlayerChar] = React.useState( new Character() )
  const [dieRollerStats, setDieRollerStats] = React.useState ( {rollName: 'Standard', dieSize: 20, modifier: 0 } )

  const setDieRoller = (rollName: string, dieSize: number, modifier: number) => {
    setDieRollerStats( {rollName: rollName, dieSize: dieSize, modifier: modifier } )
  }

  const updateCharacterData = () => {
    Axios.get('data/character')
      .then((response) => {
        setPlayerChar(new Character(response.data))
      })
      .catch((error) => {
        alert('Failed to retrieve game data')
        console.error('Failed to retrieve game data')
        console.error(error)
      })
  }

  // side-effects, [] empty array means run once after first render
  React.useEffect(() => {
    updateCharacterData()
  }, [])

  return (
    <React.Fragment>
      <PageHeader title='RPG Character Manager' subTitle='Click abilities and skills to roll them'/>
      <Container>
        <CssBaseline/>
        <CharacterSheetGrid dieRollerStats={dieRollerStats} playerChar={playerChar} setDieRoller={setDieRoller}></CharacterSheetGrid>
        <NewCharForm/>
      </Container>
    </React.Fragment>
  )
}
