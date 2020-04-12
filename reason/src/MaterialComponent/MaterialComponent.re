[@react.component]
let make = () => {
    MaterialUi.(
        <Paper square=true>
            <Tabs
                value="value" indicatorColor=`Primary textColor=`Primary>
                <Tab label={"Active"->React.string} />
                <Tab label={"Disabled"->React.string} disabled=true />
                <Tab label={"Active"->React.string} />
            </Tabs>
        </Paper>
  );
};