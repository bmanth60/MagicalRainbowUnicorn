import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';
import ListItemContent from 'components/ListItemContent';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

function ListItem({ onClick, onBlur, onChange, editable, text }) {
    return (
      <Card>
        <Grid container spacing={0} alignItems="baseline">
          <Grid item xs={1}>
              <Checkbox />
          </Grid>
          <Grid item xs={11}>
            <ListItemContent
              onClick={onClick}
              onBlur={onBlur}
              onChange={onChange}
              typographyProps={{style: {fontSize: '1rem'}}}
              editable={editable}
              text={text}
            />
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
