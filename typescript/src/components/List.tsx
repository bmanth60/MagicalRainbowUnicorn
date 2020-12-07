/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, {PropsWithChildren} from 'react'

import Card from './Card'

export default function List({ children }: PropsWithChildren<{}>) {
    return <div css={css({marginBottom: '10px'})}><Card>{children}</Card></div>
}