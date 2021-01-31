import { atom } from 'recoil'

export const listState = atom({
    key: 'listName',
    default: 'new list',
})
