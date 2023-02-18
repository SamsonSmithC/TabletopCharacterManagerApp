import React from 'react'
import PropTypes from 'prop-types'

import AbilityScoreCard from './AbilityScoreCard'

import { AbilityScoreSpreadInterface } from '../characterInterfaces'

interface AbilityScoreBarProps {
  abilityScores: AbilityScoreSpreadInterface
  proficiency: number
  setDieRoller: (rollName: string, dieSize: number, modifier: number) => void
}

export default function AbilityScoreBar(props: AbilityScoreBarProps): React.ReactElement {

  const {proficiency, abilityScores, setDieRoller}: AbilityScoreBarProps = props
  const {strength, dexterity, constitution, intelligence, wisdom, charisma}: AbilityScoreSpreadInterface = abilityScores

  return (
    <React.Fragment>
      <AbilityScoreCard abilityName={'Strength'} abilityScore={strength} proficiency={proficiency} setDieRoller={setDieRoller}/>
      <AbilityScoreCard abilityName={'Dexterity'} abilityScore={dexterity} proficiency={proficiency}  setDieRoller={setDieRoller}/>
      <AbilityScoreCard abilityName={'Constitution'} abilityScore={constitution} proficiency={proficiency}  setDieRoller={setDieRoller}/>
      <AbilityScoreCard abilityName={'Intelligence'} abilityScore={intelligence} proficiency={proficiency}  setDieRoller={setDieRoller}/>
      <AbilityScoreCard abilityName={'Wisdom'} abilityScore={wisdom} proficiency={proficiency}  setDieRoller={setDieRoller}/>
      <AbilityScoreCard abilityName={'Charisma'} abilityScore={charisma} proficiency={proficiency}  setDieRoller={setDieRoller}/>
    </React.Fragment>
  )
}