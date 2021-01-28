@react.component
let make = (~props) => {
    ReasonReact.cloneElement(
        <MaterialUi.TextField />,
        ~props,
        []
    )
}