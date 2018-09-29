import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

function getContent(onClick, editable, text) {
  if (editable) {
    return (
      <TextField
        multiline
        fullWidth
        margin="normal"
        value={text}
        autoFocus={true}
      />
    )
  }

  return (
    <Typography
      onClick={onClick}
      style={{fontSize: "1rem"}}
    >{text}
    </Typography>
  )
}

function ListItem({ onClick, editable, text }) {
  const content = getContent(onClick, editable, text)
    return (
      <Card>
        <Grid container spacing={0} alignItems="baseline">
          <Grid item xs={1}>
              <Checkbox />
          </Grid>
          <Grid item xs={11}>
            {content}
          </Grid>
        </Grid>
      </Card>
    );
}


ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
