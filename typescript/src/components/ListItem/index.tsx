import React from 'react'
import { useSetRecoilState } from 'recoil'

import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'

import Card from '../Card'
import ListItemContent, { ListItemContentContext } from '../ListItemContent'

import { LIST_ITEM } from '../../utils/states'

interface ListItemProps extends ListItemContentContext {
    index: number
}

export default function ListItem({ index, text }: ListItemProps) {
    const setItem = useSetRecoilState(LIST_ITEM(index))
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
                        onChange={() => setItem(undefined)}
                    />
                </Grid>
                <Grid item xs={11}>
                    <ListItemContent
                        typographyProps={{ style: { fontSize: '1rem' }, align: 'left' }}
                        text={text}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}
