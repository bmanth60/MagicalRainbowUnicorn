/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListIcon from '@material-ui/icons/List'

const styles = (theme: Theme) => ({
    listItem: css`
        background-color: ${theme.palette.primary.main} !important;
        '& span, svg': {
            color: ${theme.palette.common.white};
        }
    `,
})

interface ListSidebarItemProps {
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void
    text: string
    selected: boolean
}

export default function ListSidebarItem({ onClick, text, selected }: ListSidebarItemProps) {
    const theme = useTheme()
    const classes = styles(theme)

    if (selected) {
        return (
            <ListItem css={classes.listItem} button divider>
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        )
    }

    return (
        <ListItem button divider onClick={onClick}>
            <ListItemIcon>
                <ListIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}
