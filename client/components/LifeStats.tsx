import React from 'react'
import PropTypes from 'prop-types'

import { Stack, Checkbox, CardActionArea, Grid, Card, CardHeader} from '@mui/material'
import { WellnessInterface } from '../characterInterfaces'

interface LifeStatsProps {
  wellness: WellnessInterface
}

export default function LifeStats (props: LifeStatsProps): React.ReactElement {
  const {curHP, maxHP, tmpHP, armor, death}: WellnessInterface = props.wellness

  return(
    <Card style={{height: '100%'}} >
      <Grid container>
        <Grid item sm={12} md={6}>
          <CardHeader title={`${curHP} / ${maxHP}`} subheader='Current HP / Max HP'/>
        </Grid>
        <Grid item sm={12} md={6}>
          <CardHeader title={tmpHP} subheader='Temp HP'/>
        </Grid>
        <Grid item sm={12} md={6}>
          <CardHeader title={armor} subheader='Armor Class'/>
        </Grid>
        <Grid item sm={12} md={6}>
          <CardActionArea style={{height: '100%', width: '100%'}}>
            <Stack direction='row' alignItems='center'>
              <Grid item xs={4}>
                <CardHeader subheader='Death Saves'/>
              </Grid>
              <Grid item xs={8}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Grid item xs={2}>Pass:</Grid>
                  <Grid item xs={2}><Checkbox/></Grid>
                  <Grid item xs={2}><Checkbox/></Grid>
                  <Grid item xs={2}><Checkbox/></Grid>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Grid item xs={2}>Fail:</Grid>
                  <Grid item xs={2}><Checkbox/></Grid>
                  <Grid item xs={2}><Checkbox/></Grid>
                  <Grid item xs={2}><Checkbox/></Grid>
                </Stack>
              </Grid>
            </Stack>
          </CardActionArea>
        </Grid>
      </Grid>
    </Card>
  )
}