import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@mui/material'

interface PageHeaderProps {
  title: string,
  subTitle?: string
}

/**
 * A simple page header with a greeting and a title
 */
export default function PageHeader (props: PageHeaderProps): React.ReactElement {

  // Destructure the props
  const {title, subTitle}: PageHeaderProps = props

  return (
    <React.Fragment>
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Typography variant="subtitle1">
          {subTitle}
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    </React.Fragment>
  )
}

// Declare the 'types' of all props
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

PageHeader.defaultProps = {
  subTitle: ''
}
