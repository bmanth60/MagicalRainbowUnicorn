export const messagesInLocale = <S extends unknown>(
    messages: Intl.Message,
    locale: Intl.Locale = 'en'
): Pick<S, keyof S> => {
    return (Object.keys(messages).reduce<Record<string, string>>((acc, key) => {
        acc[key] = messages[key]?.[locale] || ''
        return acc
    }, {}) as unknown) as Pick<S, keyof S>
}
