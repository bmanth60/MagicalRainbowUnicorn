/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'

import List from '../components/List'
import ListHeader from '../components/ListHeader'
import ListSidebar from '../components/ListSidebar'

const styles = (theme: Theme) => ({
    root: css({
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    }),
    content: css({
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'url("https://source.unsplash.com/V3nogrYsKiQ")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: theme.spacing() * 3,
        overflowY: 'auto',
        height: window.innerHeight,
    }),
    toolbar: css({
        ...theme.mixins.toolbar,
    } as any),
})

export default function Home() {
    const theme = useTheme()
    const classes = styles(theme)

    return (
        <div css={classes.root}>
            <ListHeader />
            <ListSidebar />
            <main css={classes.content}>
                <div css={classes.toolbar} />
                <List />
            </main>
        </div>
    )
}
