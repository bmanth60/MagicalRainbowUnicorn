import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import Card from 'components/Card';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function List({ items, text, onToggle, editKey }) {
    const result = [];
    for (let i=0; i < items; ++i) {
        if (i === editKey) {
            result.push(
                <TextField
                    fullWidth
                    margin="normal"
                    value={text}
                />
            )
        } else {
            result.push(<ListItem key={i} onClick={onToggle(i)} text={text} />);
        }
    }

    return (
        <div>
            <Card style={{ marginBottom: 10 }}>
                <Grid container spacing={0} alignItems="baseline">
                    <Grid item xs={1}>
                        <AddCircleIcon style={{ marginLeft: "10px" }} color="primary" />
                    </Grid>
                    <Grid item xs={11} >
                        <TextField
                        fullWidth
                        margin="normal"
                        placeholder="Add List Item"
                        />
                    </Grid>
                </Grid>
            </Card>
            {result}
        </div>
    );
}
  
List.propTypes = {
    items: PropTypes.number,
    text: PropTypes.string,
    onToggle: PropTypes.func,
    editKey: PropTypes.number,
};
  
export default List;