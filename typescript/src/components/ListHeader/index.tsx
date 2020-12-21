/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import ListItemContent from '../ListItemContent'

const drawerWidth = 300

const styles = () => ({
    header: css({
        fontFamily: "'Shadows Into Light', cursive",
        position: 'absolute',
        marginLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
        '& input': {
            color: 'white',
        },
    }),
})

interface ListHeaderProps {
    onToggle: (toggle: boolean) => void
    onEdit: (value: string) => void
    onDelete: () => void
    editing: boolean
    message: string
}

export default function ListHeader({ onToggle, onEdit, onDelete, editing, message }: ListHeaderProps) {
    const classes = styles()
    return (
        <AppBar css={classes.header}>
            <Toolbar>
                <Grid container spacing={0} alignItems='flex-end'>
                    <Grid item xs={11}>
                        <ListItemContent
                            onClick={() => {
                                onToggle(true)
                            }}
                            onBlur={() => {
                                onToggle(false)
                            }}
                            onChange={(e) => {
                                onEdit(e.target.value)
                            }}
                            typographyProps={{
                                variant: 'h4',
                                color: 'inherit',
                                noWrap: true,
                            }}
                            editable={editing}
                            text={message}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                            onClick={() => {
                                onDelete()
                            }}
                            aria-label='Delete'
                            color='inherit'
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
