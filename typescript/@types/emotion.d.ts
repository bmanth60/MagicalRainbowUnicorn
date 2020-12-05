import '@emotion/react'
import { Theme as MUITheme } from '@material-ui/core/styles'

declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}
