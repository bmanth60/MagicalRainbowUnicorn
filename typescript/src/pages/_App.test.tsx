import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './_App'

function TestComponent() {
    return <div />
}

test('renders learn react link', () => {
    render(<App component={TestComponent} />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
