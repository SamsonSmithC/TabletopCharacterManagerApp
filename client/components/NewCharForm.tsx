import { Accordion, AccordionDetails, AccordionSummary, Button, Box, TextField, Grid, Stack, MenuItem, Select, SelectChangeEvent, FormControl, FormControlLabel, InputLabel, Checkbox } from '@mui/material'
import React from 'react'

import { CharacterInterface } from '../characterInterfaces'

export default function NewCharForm(): React.ReactElement {

  const [charName, setCharName] = React.useState('Name')
  const [charLevel, setCharLevel] = React.useState('1')
  const [charClass, setCharClass] = React.useState('Barbarian')
  
  const [charMaxHP, setCharMaxHP] = React.useState('1')
  const [charCurHP, setCharCurHP] = React.useState('1')
  const [charTmpHP, setCharTmpHP] = React.useState('0')
  const [charArmor, setCharArmor] = React.useState('10')

  const [charStr, setCharStr] = React.useState('10')
  const [charDex, setCharDex] = React.useState('10')
  const [charCon, setCharCon] = React.useState('10')
  const [charInt, setCharInt] = React.useState('10')
  const [charWis, setCharWis] = React.useState('10')
  const [charCha, setCharCha] = React.useState('10')

  const [charStrProf, setCharStrProf] = React.useState(false)
  const [charDexProf, setCharDexProf] = React.useState(false)
  const [charConProf, setCharConProf] = React.useState(false)
  const [charIntProf, setCharIntProf] = React.useState(false)
  const [charWisProf, setCharWisProf] = React.useState(false)
  const [charChaProf, setCharChaProf] = React.useState(false)

  const boolToNum = (bool: boolean):number => {
    if (bool) {return (1)}
    return (0)
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    console.log('submited')
    const newChar: CharacterInterface = 
    {
      name: charName,
      level: parseInt(charLevel),
      charClass: charClass,
      wellness: {
          curHP: parseInt(charCurHP),
          maxHP: parseInt(charMaxHP),
          tmpHP: parseInt(charTmpHP),
          armor: parseInt(charArmor),
          death: {
              pass: 0,
              fail: 0
          }
      },
      abilityScores: {
          strength: {
              score: parseInt(charStr),
              proficient: boolToNum(charStrProf)
          },
          dexterity: {
              score: parseInt(charDex),
              proficient: boolToNum(charDexProf)
          },
          constitution: {
              score: parseInt(charCon),
              proficient: boolToNum(charConProf)
          },
          intelligence: {
              score: parseInt(charInt),
              proficient: boolToNum(charIntProf)
          },
          wisdom: {
              score: parseInt(charWis),
              proficient: boolToNum(charWisProf)
          },
          charisma: {
              score: parseInt(charCha),
              proficient: boolToNum(charChaProf)
          }
      }
    }

    console.log(newChar)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch(event.target.id) {
      case 'name':
        setCharName(event.target.value)
        break;
      case 'level':
        setCharLevel(event.target.value)
        break;
      case 'maxHP':
        setCharMaxHP(event.target.value)
        break;
      case 'curHP':
        setCharCurHP(event.target.value)
        break;
      case 'tmpHP':
        setCharTmpHP(event.target.value)
        break;
      case 'armor':
        setCharArmor(event.target.value)
        break;
      case 'str':
        setCharStr(event.target.value)
        break;
      case 'dex':
        setCharDex(event.target.value)
        break;
      case 'con':
        setCharCon(event.target.value)
        break;
      case 'int':
        setCharInt(event.target.value)
        break;
      case 'wis':
        setCharWis(event.target.value)
        break;
      case 'cha':
        setCharCha(event.target.value)
        break;
    }
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setCharClass(event.target.value as string);
  }

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'strProf':
        setCharStrProf(event.target.checked)
        break;
      case 'dexProf':
        setCharDexProf(event.target.checked)
        break;
      case 'conProf':
        setCharConProf(event.target.checked)
        break;
      case 'intProf':
        setCharIntProf(event.target.checked)
        break;
      case 'wisProf':
        setCharWisProf(event.target.checked)
        break;
      case 'chaProf':
        setCharChaProf(event.target.checked)
        break;
    }
  }

  return (
    <Accordion style={{width: '100%'}}>
      <AccordionSummary>
        Build A New Character
      </AccordionSummary>
      <AccordionDetails>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                required
                id='name'
                onChange={handleChange}
                value={charName}
                size='small'
                fullWidth
                label='Character Name'
                type='text'
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <TextField
                required
                id='level'
                onChange={handleChange}
                value={charLevel}
                size='small'
                fullWidth
                label='Level'
                type='text'
              />
            </Grid>
            <Grid item xs={9} md={3}>
              <FormControl fullWidth>
                <InputLabel id='class'>Class</InputLabel>
                <Select
                  required
                  id='class'
                  onChange={handleSelectChange}
                  value={charClass}
                  size='small'
                  fullWidth
                  label="Class"
                  type='text'
                >
                  <MenuItem value='Barbarian'>Barbarian</MenuItem>
                  <MenuItem value='Bard'>Bard</MenuItem>
                  <MenuItem value='Cleric'>Cleric</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                required
                id='maxHP'
                onChange={handleChange}
                value={charMaxHP}
                size='small'
                fullWidth
                label='Max HP'
                type='text'
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                required
                id='curHP'
                onChange={handleChange}
                value={charCurHP}
                size='small'
                fullWidth
                label='Current HP'
                type='text'
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                required
                id='tmpHP'
                onChange={handleChange}
                value={charTmpHP}
                size='small'
                fullWidth
                label='Temp HP'
                type='text'
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                required
                id='armor'
                onChange={handleChange}
                value={charArmor}
                size='small'
                fullWidth
                label='Armor'
                type='text'
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <TextField
                  required
                  id='str'
                  onChange={handleChange}
                  value={charStr}
                  size='small'
                  fullWidth
                  label='Strength'
                  type='text'
                />
                <FormControlLabel control={<Checkbox id='strProf' onChange={handleCheckChange}  />} label="Save Proficiency" />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <TextField
                  required
                  id='dex'
                  onChange={handleChange}
                  value={charDex}
                  size='small'
                  fullWidth
                  label='Dexterity'
                  type='text'
                />
                <FormControlLabel control={<Checkbox id='dexProf' onChange={handleCheckChange}  />} label="Save Proficiency" />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <TextField
                  required
                  id='con'
                  onChange={handleChange}
                  value={charCon}
                  size='small'
                  fullWidth
                  label='Constitution'
                  type='text'
                />
                <FormControlLabel control={<Checkbox id='conProf' onChange={handleCheckChange}  />} label="Save Proficiency" />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <TextField
                  required
                  id='int'
                  onChange={handleChange}
                  value={charInt}
                  size='small'
                  fullWidth
                  label='Intelligence'
                  type='text'
                />
                <FormControlLabel control={<Checkbox id='intProf' onChange={handleCheckChange}  />} label="Save Proficiency" />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <TextField
                  required
                  id='wis'
                  onChange={handleChange}
                  value={charWis}
                  size='small'
                  fullWidth
                  label='Wisdom'
                  type='text'
                />
                <FormControlLabel control={<Checkbox id='wisProf' onChange={handleCheckChange}  />} label="Save Proficiency" />
              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction='row' spacing={1} justifyContent='space-between'>
                <TextField
                  required
                  id='cha'
                  onChange={handleChange}
                  value={charCha}
                  size='small'
                  fullWidth
                  label='Charisma'
                  type='text'
                /> 
                <FormControlLabel control={<Checkbox id='chaProf' onChange={handleCheckChange}  />} label="Save Proficiency" />
              </Stack>
            </Grid>
          </Grid>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}