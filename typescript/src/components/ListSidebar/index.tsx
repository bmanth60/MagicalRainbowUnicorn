/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ListSidebarItem from '../ListSidebarItem'
import { messages } from './messages'

import { LISTS_STATE, SELECTED_STATE, ITEMS_STATE } from '../../utils/states'

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

export default function ListSidebar() {
    const theme = useTheme()
    const classes = styles(theme)

    const selectedList = useRecoilValue(SELECTED_STATE)
    const [lists, setLists] = useRecoilState(LISTS_STATE)
    const [items, setItems] = useRecoilState(ITEMS_STATE)
    const listItems = lists.map((list, index) => (
        <ListSidebarItem key={index} index={index} selected={selectedList === index} text={list.name} />
    ))

    return (
        <Drawer css={classes.drawer} variant='permanent'>
            <List component='nav'>
                <ListItem
                    button
                    onClick={() => {
                        // Push in a new list
                        setLists([...lists, { name: 'new list' }])

                        // Push new items for list
                        setItems([...items, []])
                    }}
                >
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={messages.add} />
                </ListItem>
                {listItems}
            </List>
        </Drawer>
    )
}
