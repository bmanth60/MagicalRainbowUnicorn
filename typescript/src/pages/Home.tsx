/** @jsx jsx */
import { jsx, css, useTheme, Theme } from '@emotion/react'
import React, { useReducer } from 'react'

import List from '../components/List'
import ListHeader from '../components/ListHeader'
import ListSidebar from '../components/ListSidebar'

const styles = (theme: Theme) => ({
    root: css({
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    }),
    content: css({
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'url("https://source.unsplash.com/V3nogrYsKiQ")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: theme.spacing() * 3,
        overflowY: 'auto',
        height: window.innerHeight,
    }),
    toolbar: css({
        ...theme.mixins.toolbar,
    } as any),
})

interface State {
    editing: boolean
    selectedList: number
    selectedItem: number
    lists: ListItemData
}

type Action =
    | { type: 'toggle_checklist_name'; isEditing: boolean }
    | { type: 'delete_checklist_item'; key: number }
    | { type: 'toggle_checklist_item'; key: number }
    | { type: 'add_checklist_item'; text: string }
    | { type: 'update_checklist_item'; key: number; text: string }
    | { type: 'check_checklist_item'; key: number }
    | { type: 'select_checklist'; key: number }
    | { type: 'add_checklist' }
    | { type: 'update_checklist'; name: string }
    | { type: 'delete_checklist' }

const emptyList = {
    name: 'new list',
    items: [],
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'toggle_checklist_name':
            state.editing = action.isEditing
            return { ...state }
        case 'delete_checklist_item':
            if (state.lists[state.selectedList]) {
                state.lists[state.selectedList].items.splice(action.key, 1)
            }
            return { ...state }
        case 'toggle_checklist_item':
            return { ...state, selectedItem: action.key }
        case 'add_checklist_item':
            state.lists?.[state.selectedList].items.push(action.text)
            return { ...state }
        case 'update_checklist_item':
            if (state.lists[state.selectedList]) {
                state.lists[state.selectedList].items[action.key] = action.text
            }
            return { ...state }
        case 'add_checklist':
            state.lists.push({ ...emptyList, items: [] })
            state.selectedList = state.lists.length - 1
            return { ...state }
        case 'update_checklist':
            if (state.lists[state.selectedList]) {
                state.lists[state.selectedList].name = action.name
            }
            return { ...state }
        case 'delete_checklist':
            if (state.lists[state.selectedList]) {
                state.lists.splice(state.selectedList, 1)
            }

            if (state.lists.length === 0) {
                state.lists.push({ ...emptyList })
            }

            if (state.selectedList > state.lists.length - 1) {
                state.selectedList = state.lists.length - 1
            }

            return { ...state }
        case 'select_checklist':
            state.selectedList = action.key
            return { ...state }
    }

    return state
}

export default function Home() {
    const theme = useTheme()
    const classes = styles(theme)
    const [state, dispatch] = useReducer(reducer, {
        editing: false,
        selectedList: 0,
        selectedItem: -1,
        lists: [{ ...emptyList }],
    })

    return (
        <div css={classes.root}>
            <ListHeader
                editing={state.editing}
                onToggle={(toggle) => {
                    dispatch({ type: 'toggle_checklist_name', isEditing: toggle })
                }}
                onDelete={() => {
                    dispatch({ type: 'delete_checklist' })
                }}
                onEdit={(name) => {
                    dispatch({ type: 'update_checklist', name })
                }}
                message={state.lists?.[state.selectedList].name || ''}
            />
            <ListSidebar
                onAdd={() => {
                    dispatch({ type: 'add_checklist' })
                }}
                onSelect={(index) => {
                    dispatch({ type: 'select_checklist', key: index })
                }}
                selected={state.selectedList}
                items={state.lists}
            />
            <main css={classes.content}>
                <div css={classes.toolbar} />
                <List
                    onToggle={(index) => {
                        dispatch({ type: 'toggle_checklist_item', key: index })
                    }}
                    onEdit={(index, text) => {
                        dispatch({ type: 'update_checklist_item', key: index, text })
                    }}
                    onAdd={(text) => {
                        dispatch({ type: 'add_checklist_item', text })
                    }}
                    onCheck={(index) => {
                        dispatch({ type: 'delete_checklist_item', key: index })
                    }}
                    editId={state.selectedItem}
                    items={state.lists[state.selectedList].items}
                />
            </main>
        </div>
    )
}
