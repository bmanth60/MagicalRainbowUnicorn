/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { PropsWithChildren } from 'react'
import { Theme } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const style = (theme: Theme) =>
    css({
        backgroundClip: 'padding-box',
        border: '1px solid transparent',
        padding: theme.spacing() * 1,
    })

export default function EmotionCard({ children }: PropsWithChildren<{}>) {
    return (
        <Paper css={style} elevation={1}>
            {children}
        </Paper>
    )
}
