/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { useRecoilState, useRecoilCallback } from 'recoil'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import ListItemContent from '../ListItemContent'

import { SELECTED_LIST_NAME, LISTS_STATE, ITEMS_STATE, SELECTED_STATE } from '../../utils/states'
import { replaceItemAtArrayIndex } from '../../utils'

const drawerWidth = 300

const styles = () => ({
    header: css({
        fontFamily: "'Shadows Into Light', cursive",
        position: 'absolute',
        paddingLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
        '& input': {
            color: 'white',
        },
    }),
})

export default function ListHeader() {
    const classes = styles()
    const [name, setName] = useRecoilState(SELECTED_LIST_NAME)

    const deleteList = useRecoilCallback(({ snapshot: { getLoadable }, set, reset }) => () => {
        const selected = getLoadable(SELECTED_STATE).getValue()
        const lists = getLoadable(LISTS_STATE).getValue()
        const items = getLoadable(ITEMS_STATE).getValue()

        if (lists.length > 1) {
            set(LISTS_STATE, replaceItemAtArrayIndex(lists, selected))
            set(ITEMS_STATE, replaceItemAtArrayIndex(items, selected))

            // -2 because 1 is for length -> index, and 1 is for removed list
            if (selected > lists.length - 2) {
                set(SELECTED_STATE, lists.length - 2)
            }
        } else {
            reset(LISTS_STATE)
            reset(ITEMS_STATE)
            reset(SELECTED_STATE)
        }
    })

    return (
        <AppBar css={classes.header}>
            <Toolbar>
                <Grid container spacing={0} alignItems='flex-end'>
                    <Grid item xs={11}>
                        <ListItemContent
                            onChange={(e) => setName(e.target.value)}
                            typographyProps={{
                                variant: 'h4',
                                color: 'inherit',
                                noWrap: true,
                                align: 'left',
                            }}
                            text={name}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={deleteList} aria-label='Delete' color='inherit'>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
