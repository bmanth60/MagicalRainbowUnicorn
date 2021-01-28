module Styles = {
    open Css
    let card = style(list{
        backgroundClip(paddingBox),
        border(px(1), solid, transparent),
        padding(px(Theme.theme.spacing(1)))
    })
}

@react.component
let make = (~children: option<ReasonReact.reactElement>=?, ~className:string="") => {
    open MaterialUi

    let mergedStyles = Css.merge(list{Styles.card, className})
    <Paper className=mergedStyles elevation={Number.int(1)}>
        {children}
    </Paper>
}