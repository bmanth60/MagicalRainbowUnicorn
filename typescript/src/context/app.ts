import React from 'react'

export interface AppContextIFace {
    locale: Intl.Locale
}

const context = React.createContext<AppContextIFace>({} as AppContextIFace)
const { Provider, Consumer } = context

export { Provider, Consumer }
export default context
