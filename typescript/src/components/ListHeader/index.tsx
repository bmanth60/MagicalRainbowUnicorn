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

import { SELECTED_LIST_NAME } from '../../utils/states'

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
                        <IconButton
                            onClick={() => {
                                // Delete list
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
