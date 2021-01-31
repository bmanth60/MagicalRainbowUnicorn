/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { useRecoilState } from 'recoil'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import ListItemContent from '../ListItemContent'

import { listState } from '../../utils/states'

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

interface ListHeaderProps {
    onToggle: (toggle: boolean) => void
    onEdit: (value: string) => void
    onDelete: () => void
    editing: boolean
    message: string
}

export default function ListHeader({ onToggle, onDelete, editing }: ListHeaderProps) {
    const classes = styles()
    const [text, setText] = useRecoilState(listState)

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
                                setText(e.target.value)
                            }}
                            typographyProps={{
                                variant: 'h4',
                                color: 'inherit',
                                noWrap: true,
                                align: 'left',
                            }}
                            editable={editing}
                            text={text}
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
