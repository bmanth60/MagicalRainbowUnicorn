/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React from 'react'

import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'

import Card from '../Card'
import ListItem from '../ListItem'
import { messages } from './messages'

const styles = (theme: Theme) => ({
    margin: css({
        margin: theme.spacing(1),
    }),
})

interface ListProps {
    onAdd: (text: string) => void
    onCheck: (index: number) => void
    onEdit: (index: number, text: string) => void
    onToggle: (index: number) => void
    editId: number
    items: string[]
}

export default function List({ onAdd, onCheck, onToggle, onEdit, items, editId }: ListProps) {
    const theme = useTheme()
    const classes = styles(theme)

    let result: Array<React.ReactElement<typeof ListItem>> = []
    if (items) {
        result = items.map((item, index) => (
            <ListItem
                key={index}
                editable={index === editId}
                onClick={() => {
                    onToggle(index)
                }}
                onBlur={() => {
                    onToggle(-1)
                }}
                onChange={(e) => {
                    onEdit(index, e.target.value)
                }}
                onCheck={() => {
                    onCheck(index)
                }}
                text={item}
            />
        ))
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
                                        onAdd(elem.value)
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
