@react.component
let make = (~props, ~children: array<ReasonReact.reactElement> = []) => {
    ReasonReact.cloneElement(
        <MaterialUi.Typography />,
        ~props,
        children
    )
}