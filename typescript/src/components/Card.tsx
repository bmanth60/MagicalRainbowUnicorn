import React, { PropsWithChildren } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundClip: 'padding-box',
            border: '1px solid transparent',
            padding: theme.spacing() * 1,
        },
    })
)

export default function Card({ children }: PropsWithChildren<{}>) {
    const classes = useStyles()
    return (
        <Paper className={classes.root} elevation={1}>
            {children}
        </Paper>
    )
}
