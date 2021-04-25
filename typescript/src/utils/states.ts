import { atom, selector, selectorFamily, DefaultValue } from 'recoil'

interface List {
    name: string
}

export const LISTS_STATE = atom<Array<List>>({
    key: 'listsState',
    default: [{ name: 'new list' }],
})

export const SELECTED_STATE = atom({
    key: 'selectedListState',
    default: 0,
})

export const ITEMS_STATE = atom<Array<string[]>>({
    key: 'itemsState',
    default: [[]],
})

export const SELECTED_LIST = selector<List>({
    key: 'selectedList',
    get: ({ get }) => {
        const lists = get(LISTS_STATE)
        const selected = get(SELECTED_STATE)
        return lists[selected]
    },
    set: ({ get, set }, list) => {
        if (list instanceof DefaultValue) {
            set(LISTS_STATE, list)
            return
        }

        const lists = get(LISTS_STATE)
        const selected = get(SELECTED_STATE)

        // Build new list for index and replace
        set(LISTS_STATE, [...lists.slice(0, selected), list, ...lists.slice(selected + 1)])
    },
})

export const SELECTED_LIST_NAME = selector<string>({
    key: 'selectedListname',
    get: ({ get }) => {
        const list = get(SELECTED_LIST)
        return list.name
    },
    set: ({ get, set }, name) => {
        if (name instanceof DefaultValue) {
            set(SELECTED_LIST, name)
            return
        }

        // Create new object to update
        const list = { ...get(SELECTED_LIST) }
        list.name = name
        set(SELECTED_LIST, list)
    },
})

export const SELECTED_LIST_ITEMS = selector<Array<string>>({
    key: 'selectedListItems',
    get: ({ get }) => {
        const selected = get(SELECTED_STATE)
        const items = get(ITEMS_STATE)
        return items[selected]
    },
    set: ({ get, set }, items) => {
        if (items instanceof DefaultValue) {
            set(ITEMS_STATE, items)
            return
        }

        const listItems = get(ITEMS_STATE)
        const selected = get(SELECTED_STATE)
        set(ITEMS_STATE, [...listItems.slice(0, selected), items, ...listItems.slice(selected + 1)])
    },
})

export const LIST_ITEM = selectorFamily<string, number>({
    key: 'listItem',
    get: (index) => ({ get }) => {
        const items = get(ITEMS_STATE)
        const selected = get(SELECTED_STATE)
        return items[selected][index]
    },
    set: (index) => ({ get, set }, item) => {
        if (item instanceof DefaultValue) {
            set(SELECTED_LIST_ITEMS, item)
            return
        }

        const items = get(SELECTED_LIST_ITEMS)
        set(SELECTED_LIST_ITEMS, [...items.slice(0, index), item, ...items.slice(index + 1)])
    },
})
