import React from 'react'

import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'

import Card from '../Card'
import ListItemContent, { ListItemContentContext } from '../ListItemContent'

interface ListItemProps extends ListItemContentContext {
    onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ListItem({ onCheck, onClick, onBlur, onChange, editable, text }: ListItemProps) {
    return (
        <Card>
            <Grid container spacing={0} alignItems='baseline'>
                <Grid item xs={1}>
                    <Checkbox
                        color='primary'
                        // TODO Brian - 20181003 - Note: setting checkbox to false
                        // is a hack because it is not rerendered on deletion due to
                        // lack of key uniqueness
                        checked={false}
                        onChange={onCheck}
                    />
                </Grid>
                <Grid item xs={11}>
                    <ListItemContent
                        onClick={onClick}
                        onBlur={onBlur}
                        onChange={onChange}
                        typographyProps={{ style: { fontSize: '1rem' }, align: 'left' }}
                        editable={editable}
                        text={text}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}
