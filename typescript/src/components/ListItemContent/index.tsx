import React from 'react'

import Typography, { TypographyProps } from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export interface ListItemContentContext {
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void
    onBlur: (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement>
    ) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    editable: boolean
    text: string
}

interface ListItemContentProps extends ListItemContentContext {
    typographyProps: TypographyProps
}

export default function ListItemContent({
    onClick,
    onBlur,
    onChange,
    editable,
    text,
    typographyProps,
}: ListItemContentProps) {
    if (editable) {
        return (
            <TextField
                fullWidth
                margin='none'
                onChange={onChange}
                onBlur={onBlur}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        onBlur(e)
                    }
                }}
                value={text}
                autoFocus
            />
        )
    }

    return (
        <Typography {...typographyProps} onClick={onClick}>
            {text || 'no name'}
        </Typography>
    )
}
