import React from 'react';
import PropTypes from 'prop-types';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styled from 'components/styled';
import ListSidebarItem from 'components/ListSidebarItem';
import { messages } from './messages';

const drawerWidth = 300;

const DrawerPaper = styled(Drawer)(theme => ({
  width: `${drawerWidth}px`,
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
  '& div': {
    width: `${drawerWidth}px`,
  },
}));

function ListSidebar({ onAdd, onSelect, selected, items }) {
  let lists = [];
  if (items) {
    lists = items.map((item, index) => (
      <ListSidebarItem
        onClick={() => {
          onSelect(index);
        }}
        selected={selected === index}
        key={index}
        text={item.get('name')}
      />
    ));
  }

  return (
    <DrawerPaper variant="permanent">
      <List component="nav">
        <ListItem button onClick={onAdd}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary={messages.add.defaultMessage} />
        </ListItem>
        {lists}
      </List>
    </DrawerPaper>
  );
}

ListSidebar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  items: PropTypes.object.isRequired,
};

export default ListSidebar;
