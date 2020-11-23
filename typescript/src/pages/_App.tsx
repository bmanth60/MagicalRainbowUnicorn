import React from 'react'
import styled from '@emotion/styled'

import SpinningLogo from '../components/SpinningLogo'

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
        <Container>
            <header className='App-header'>
                <SpinningLogo />
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React NOW!!
                </a>
            </header>
        </Container>
    )
}

export default App
