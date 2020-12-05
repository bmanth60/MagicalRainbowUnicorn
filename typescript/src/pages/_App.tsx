import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#6772e5',
        },
    },
})

const Container = styled.div`
    text-align: center;

    .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }

    .App-link {
        color: #61dafb;
    }
`

interface AppProps {
    component: React.ComponentType<any>
}

function App({ component: Component }: AppProps) {
    return (
        <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                <Container>
                    <Component />
                </Container>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}

export default App
