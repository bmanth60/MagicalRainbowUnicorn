import React from 'react'

import SpinningLogo from '../components/SpinningLogo'
import Card from '../components/Card'
import List from '../components/List'
import ListHeader from '../components/ListHeader'

function Intro() {
    return (
        <React.Fragment>
            <ListHeader
                editing={true}
                onToggle={(e: any) => {}}
                onDelete={() => {}}
                onEdit={(e: any) => {}}
                message='name'
            />
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
        </React.Fragment>
    )
}

export default Intro
