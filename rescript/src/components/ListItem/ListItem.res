@react.component
let make = (~onCheck) => {
        <Card>
            <MaterialUi.Grid container spacing=#V0 alignItems=#Baseline>
                <MaterialUi.Grid item=true xs=MaterialUi.Grid.Xs._1>
                    <MaterialUi.Checkbox
                        color='primary'
                        // TODO Brian - 20181003 - Note: setting checkbox to false
                        // is a hack because it is not rerendered on deletion due to
                        // lack of key uniqueness
                        checked={false}
                        onChange={onCheck}
                    />
                </MaterialUi.Grid>
                <MaterialUi.Grid item=true xs=MaterialUi.Grid.Xs._11>
                    <ListItemContent
                        onClick={onClick}
                        onBlur={onBlur}
                        onChange={onChange}
                        typographyProps={{ style: { fontSize: "1rem" }, align: "left" }}
                        editable={editable}
                        text={text}
                    />
                </MaterialUi.Grid>
            </MaterialUi.Grid>
        </Card>
}