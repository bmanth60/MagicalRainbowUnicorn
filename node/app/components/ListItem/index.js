import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

function getContent(onClick, onBlur, onChange, editable, text) {
  const safeText = text ? text : '';
  if (editable) {
    return (
      <TextField
        fullWidth
        margin="normal"
        onChange={onChange}
        onBlur={onBlur}
        value={safeText}
        autoFocus={true}
      />
    )
  }

  return (
    <Typography
      onClick={onClick}
      style={{fontSize: "1rem"}}
    >{safeText}
    </Typography>
  )
}

function ListItem({ onClick, onBlur, onChange, editable, text }) {
  const content = getContent(onClick, onBlur, onChange, editable, text)
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
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

export default ListItem;
