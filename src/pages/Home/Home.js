import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'Home' })}>
      <Typography>{intl.formatMessage({ id: ' ' })}</Typography>
    </Page>
  )
}
export default HomePage
