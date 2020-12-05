import React from 'react'

import SpinningLogo from '../components/SpinningLogo'
import EmotionCard from '../components/EmotionCard'

function Intro() {
    return (
        <header className='App-header'>
            <SpinningLogo />
            <EmotionCard>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React NOW!!
                </a>
            </EmotionCard>
        </header>
    )
}

export default Intro
