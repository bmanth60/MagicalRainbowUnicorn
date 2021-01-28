@react.component
let make = () => {
    <MaterialUi.ThemeProvider theme={Theme.theme}>
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
            <TodoList
                onAdd={_a => Js.log("add")}
                onCheck={_i => Js.log("check")}
                onToggle={_i => Js.log("toggle")}
                onEdit={(_i,_s) => Js.log("edit")}
                editId=0
                items=[]>
            </TodoList>
        </div>
    </div>
    </MaterialUi.ThemeProvider>
}