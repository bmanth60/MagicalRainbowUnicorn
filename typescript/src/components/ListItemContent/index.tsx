import React, { useState } from 'react'

import Typography, { TypographyProps } from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export interface ListItemContentContext {
    text: string
}

interface ListItemContentProps extends ListItemContentContext {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    typographyProps: TypographyProps
}

export default function ListItemContent({ text, typographyProps, onChange }: ListItemContentProps) {
    const [selected, setSelected] = useState<boolean>(false)
    if (selected) {
        return (
            <TextField
                fullWidth
                margin='none'
                onChange={onChange}
                onBlur={(_) => {
                    setSelected(false)
                }}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        setSelected(false)
                    }
                }}
                value={text}
                autoFocus
            />
        )
    }

    return (
        <Typography {...typographyProps} onClick={() => setSelected(true)}>
            {text || 'no name'}
        </Typography>
    )
}
