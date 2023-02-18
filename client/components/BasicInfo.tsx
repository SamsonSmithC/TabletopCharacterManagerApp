import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Card, CardHeader, Stack} from '@mui/material'

interface BasicInfoProps {
    name: string
    charClass: string
    level: number
}

export default function BasicInfo(props: BasicInfoProps): React.ReactElement {
    const {name, charClass, level}:BasicInfoProps = props
    
    return(
        <Card>
            <Stack direction='row' justifyContent='space-between'>
                <Grid item>
                    <CardHeader title={name} subheader='Name'/>
                </Grid>
                <Grid item>
                    <CardHeader  title={`Lvl ${level} ${charClass}`} subheader='Class & Level'/>
                </Grid>
            </Stack>
        </Card>
    )
}