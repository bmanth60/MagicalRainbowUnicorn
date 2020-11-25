[@react.component]
let make = () => {
    MaterialUi.(
        <Paper square=true>
            <Tabs indicatorColor=`Primary textColor=`Primary value=Any(0)>
                <Tab label={"Active"->React.string} />
                <Tab label={"Disabled"->React.string} disabled=true />
                <Tab label={"Active"->React.string} />
            </Tabs>
        </Paper>
  );
};