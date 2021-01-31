@react.component
let make = (~onClick, ~onBlur, ~onChange, ~editable, ~text, ~typographyProps) => {
    if (editable) {
        <MUITextField
            props={
                fullWidth: true,
                margin: "none",
                onChange: onChange,
                onBlur: onBlur,
                onKeyPress:  %raw(`e => {
                                if (e.key === "Enter") {
                                    onBlur(e)
                                }
                            }`),
                value: text,
                autoFocus: true
            }
        />
    } else {
        <MUITypography props={
            ...typographyProps,
            onClick: onClick
        }>
            {text || "no name"}
        </MUITypography>
    }
}