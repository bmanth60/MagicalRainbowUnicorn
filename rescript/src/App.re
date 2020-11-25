[@react.component]
let make = () => {
    <MaterialUi_ThemeProvider theme={Theme.theme}>
    <div>
        <div>
            <h1>{ReasonReact.string("New Component")}</h1>
            <ComponentWithHooks />
            <BlinkingGreeting>
                <span>{ReasonReact.string("child")}</span>
            </BlinkingGreeting>
            <FetchedDogPictures />
            <ReasonUsingJSUsingReason />
            <ReducerFromReactJSDocs />
            <MaterialComponent />
            <Card><span>{ReasonReact.string("test")}</span></Card>
        </div>
    </div>
    </MaterialUi_ThemeProvider>
}