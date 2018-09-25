import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

function ListItem({ onClick, text }) {
    return (
      <Card>
        <Grid container spacing={0} alignItems="baseline">
          <Grid item xs={1}>
              <Checkbox />
          </Grid>
          <Grid item xs={11}>
              <Typography onClick={onClick} style={{fontSize: "1rem"}}>{text}</Typography>
          </Grid>
        </Grid>
      </Card>
    );
}


ListItem.propTypes = {
  items: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
  
export default ListItem;