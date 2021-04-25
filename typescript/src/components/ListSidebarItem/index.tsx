/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListIcon from '@material-ui/icons/List'

import { SELECTED_STATE } from '../../utils/states'

const styles = (theme: Theme) => ({
    listItem: css`
        background-color: ${theme.palette.primary.main} !important;
        '& span, svg': {
            color: ${theme.palette.common.white};
        }
    `,
})

interface ListSidebarItemProps {
    index: number
    text: string
    selected: boolean
}

export default function ListSidebarItem({ text, selected, index }: ListSidebarItemProps) {
    const theme = useTheme()
    const classes = styles(theme)
    const setSelected = useSetRecoilState(SELECTED_STATE)

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
        <ListItem button divider onClick={() => setSelected(index)}>
            <ListItemIcon>
                <ListIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}
