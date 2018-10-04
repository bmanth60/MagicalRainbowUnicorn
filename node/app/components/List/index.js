import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';

import ListItem from 'components/ListItem';
import Card from 'components/Card';
import { messages } from './messages';

function List({ onAdd, onCheck, onToggle, onEdit, items, editId }) {
  let result = [];
  if (items) {
    result = items.map((item, index) => (
      <ListItem
        key={index}
        editable={index === editId}
        onClick={() => {
          onToggle(index);
        }}
        onBlur={() => {
          onToggle(-1);
        }}
        onChange={e => {
          onEdit(index, e.target.value);
        }}
        onCheck={() => {
          onCheck(index);
        }}
        text={item.get('text')}
      />
    ));
  }

  return (
    <div>
      <Card style={{ marginBottom: 10 }}>
        <Grid container spacing={0} alignItems="baseline">
          <Grid item xs={1}>
            <AddCircleIcon style={{ marginLeft: '10px' }} color="primary" />
          </Grid>
          <Grid item xs={11}>
            <TextField
              fullWidth
              margin="normal"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  onAdd(e.target.value);
                }
              }}
              placeholder={messages.add.defaultMessage}
            />
          </Grid>
        </Grid>
      </Card>
      {result}
    </div>
  );
}

List.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  items: PropTypes.object,
  editId: PropTypes.number.isRequired,
};

export default List;
