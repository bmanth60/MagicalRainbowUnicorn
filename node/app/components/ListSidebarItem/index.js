import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';

import styled from 'components/styled';

const SelectedListItem = styled(ListItem)(theme => ({
  backgroundColor: theme.palette.primary.main,
  '& span, svg': {
    color: theme.palette.common.white,
  },
}));

function ListSidebarItem({ onClick, text, selected }) {
  if (selected) {
    return (
      <SelectedListItem button divider>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </SelectedListItem>
    );
  }

  return (
    <ListItem button divider onClick={onClick}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

ListSidebarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListSidebarItem;
