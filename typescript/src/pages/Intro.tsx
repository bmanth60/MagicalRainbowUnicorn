import React from 'react'

import SpinningLogo from '../components/SpinningLogo'
import Card from '../components/Card'
import List from '../components/List'

function Intro() {
    return (
        <header className='App-header'>
            <SpinningLogo />
            <List>
            <Card>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React NOW!!
                </a>
            </Card>
            </List>
        </header>
    )
}

export default Intro
