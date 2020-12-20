/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React, {PropsWithChildren} from 'react'

import Card from '../Card'
import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'
import { messages } from './messages'

const styles = (theme: Theme) => ({
  margin: css({
    margin:  theme.spacing(1)
  }),
})

export default function List({ children }: PropsWithChildren<{}>) {
    const theme = useTheme()
    const classes = styles(theme)

    return <Card css={css({marginBottom: '10px'})}>
      <div css={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={2}>
            <AddCircleIcon color="primary" />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  // onAdd(e.target.value);
                }
              }}
              placeholder={messages.add}
            />
          </Grid>
        </Grid>
        </div>
        </Card>
}