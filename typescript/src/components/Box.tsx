import React from 'react'

interface BoxProps {
    user?: string
}

export default function Box({ user }: BoxProps) {
    return (
        <div
            id='box'
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                display: 'inline-block',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                verticalAlign: 'top',
            }}
        >
            {user}
        </div>
    )
}
