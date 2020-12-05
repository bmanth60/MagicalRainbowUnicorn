/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React, { PropsWithChildren } from 'react'

import Paper from '@material-ui/core/Paper'

const style = (theme: Theme) =>
    css({
        backgroundClip: 'padding-box',
        border: '1px solid transparent',
        padding: theme.spacing() * 1,
    })

export default function EmotionCard({ children }: PropsWithChildren<{}>) {
    const theme = useTheme()
    return (
        <Paper css={style(theme)} elevation={1}>
            {children}
        </Paper>
    )
}
