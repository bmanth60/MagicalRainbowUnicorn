/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import Paper from '@material-ui/core/Paper'

const styles = (theme: Theme) => ({
    root: css({
        backgroundClip: 'padding-box',
        border: '1px solid transparent',
        padding: theme.spacing() * 1,
    }),
})

interface CardProps {
    className?: string
}

export default function Card({ children, className }: PropsWithChildren<CardProps>) {
    const theme = useTheme()
    const classes = styles(theme)
    return (
        <Paper css={classes.root} className={className} elevation={1}>
            {children}
        </Paper>
    )
}
