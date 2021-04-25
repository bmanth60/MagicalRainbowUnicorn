export function replaceItemAtArrayIndex<T>(arr: Array<T>, index: number, value?: T) {
    if (!value) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)]
    }

    return [...arr.slice(0, index), value, ...arr.slice(index + 1)]
}
