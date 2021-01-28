module Styles = {
    open Css

    let margin = style(list{
        margin(px(Theme.theme.spacing(1))),
    })
}

@react.component
let make = (~onAdd: (string) => unit, ~onCheck: (int) => unit, ~onToggle: (int) => unit, ~onEdit: (int, string) => unit, ~editId: int, ~items: array<string>) => {
    onEdit(1, "test")
    onCheck(1)
    onToggle(1)
    onAdd("test")

    if (editId > 1) {
        Js.log("edit")
    }

    if (Belt.Array.length(items) > 1) {
        Js.log("items")
    }

    <div>
        <Card className=Css.style(list{Css.marginBottom(Css.px(10))})>
            <div className=Styles.margin>
                <MaterialUi.Grid container=true spacing=#V1 alignItems=#Flex_End>
                    <MaterialUi.Grid item=true xs=MaterialUi.Grid.Xs._2>
                        <Theme.Icons.AddCircle color=#Primary />
                    </MaterialUi.Grid>
                    <MaterialUi.Grid item=true xs=MaterialUi.Grid.Xs._10>
                        <MUITextField
                            props={
                                "fullWidth": true,
                                "placeholder": {"test place holder"->React.string},
                                "onKeyPress": %raw(`e => {
                                    if (e.key === "return") {
                                        onAdd(e.target.value)
                                    }
                                }`)
                            }                            
                        />
                    </MaterialUi.Grid>
                </MaterialUi.Grid>
            </div>
        </Card>
    </div>
}