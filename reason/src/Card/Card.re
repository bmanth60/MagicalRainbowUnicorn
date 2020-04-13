module Styles = {
    open Css;
    let card = style([
        backgroundClip(paddingBox),
        border(px(1), solid, transparent),
    ])
}

[@react.component]
let make = (~children) => {
    MaterialUi.(
        <Paper className=Styles.card elevation=`Int(1)>
            {children}
        </Paper>
  );
};