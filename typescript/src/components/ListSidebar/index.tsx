/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ListSidebarItem from '../ListSidebarItem'
import { messages } from './messages'

const drawerWidth = 300

const styles = (theme: Theme) => ({
    drawer: css({
        width: `${drawerWidth}px`,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
        '> div': {
            width: `${drawerWidth}px`,
        },
    }),
})

interface ListSidebarProps {
    onAdd: () => void
    onSelect: (index: number) => void
    selected: number
    items: ListItemData
}

export default function ListSidebar({ onAdd, onSelect, selected, items }: ListSidebarProps) {
    let lists: React.ReactElement<typeof ListSidebarItem>[] = []
    if (items) {
        lists = items.map((_item, index) => (
            <ListSidebarItem
                onClick={() => {
                    onSelect(index)
                }}
                selected={selected === index}
                key={index}
            />
        ))
    }

    const theme = useTheme()
    const classes = styles(theme)

    return (
        <Drawer css={classes.drawer} variant='permanent'>
            <List component='nav'>
                <ListItem button onClick={onAdd}>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={messages.add} />
                </ListItem>
                {lists}
            </List>
        </Drawer>
    )
}
