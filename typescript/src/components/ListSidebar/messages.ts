import { messagesInLocale } from '../../utils/i18n'

interface Messages {
    add: string
}

export const messages = messagesInLocale<Messages>({
    add: {
        en: 'New List',
    },
})
