/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import logo from '../static/logo.svg'

const style = css`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: spin infinite 20s linear;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export default function SpinningLogo() {
    return <img src={logo} css={style} alt='logo' />
}
