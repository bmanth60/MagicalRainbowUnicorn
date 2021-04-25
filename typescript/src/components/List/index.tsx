/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'
import { useRecoilState } from 'recoil'

import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'

import Card from '../Card'
import ListItem from '../ListItem'
import { messages } from './messages'

import { SELECTED_LIST_ITEMS } from '../../utils/states'

const styles = (theme: Theme) => ({
    margin: css({
        margin: theme.spacing(1),
    }),
})

export default function List() {
    const theme = useTheme()
    const classes = styles(theme)
    const [items, setItems] = useRecoilState(SELECTED_LIST_ITEMS)

    let result: Array<React.ReactElement<typeof ListItem>> = []
    if (items) {
        result = items.map((text, index) => <ListItem key={index} index={index} text={text} />)
    }

    return (
        <div>
            <Card css={css({ marginBottom: '10px' })}>
                <div css={classes.margin}>
                    <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item xs={2}>
                            <AddCircleIcon color='primary' />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                onKeyPress={(e: React.KeyboardEvent) => {
                                    const elem = e.target as HTMLInputElement
                                    if (e.key === 'Enter') {
                                        setItems([...items, elem.value])
                                    }
                                }}
                                placeholder={messages.add}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Card>
            {result}
        </div>
    )
}
