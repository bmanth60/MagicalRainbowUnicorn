import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import SpinningLogo from '../components/SpinningLogo'
import EmotionCard from '../components/EmotionCard'

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

function App() {
    return (
        <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                <Container>
                    <header className='App-header'>
                        <SpinningLogo />
                        <EmotionCard>
                            <a
                                className='App-link'
                                href='https://reactjs.org'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Learn React NOW!!
                            </a>
                        </EmotionCard>
                    </header>
                </Container>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}

export default App
