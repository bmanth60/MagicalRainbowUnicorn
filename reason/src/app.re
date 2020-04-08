[@react.component]
let make = () => {
    <div>
        <div>
            <h1>{ReasonReact.string("New Component")}</h1>
            <NewComponent />
        </div>
    </div>;
};