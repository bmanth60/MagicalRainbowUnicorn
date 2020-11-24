module Styles = {
    open Css;
    let card = style([
        backgroundClip(paddingBox),
        border(px(1), solid, transparent),
    ])
}

[@react.component]
let make = (~children: option(ReasonReact.reactElement)=?) => {
    MaterialUi.(
        <Paper className=Styles.card elevation={Number.int(1)}>
            {children}
        </Paper>
  )
}