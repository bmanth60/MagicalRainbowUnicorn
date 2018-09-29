import React from 'react';
import PropTypes from 'prop-types';

import styled from 'components/styled';
import ListSidebarItem from 'components/ListSidebarItem';
import { messages } from './messages';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

function ListSidebar({ items }) {
    const result = [];
    for (let i=0; i < items; ++i) {
        result.push(<ListSidebarItem key={i} itemKey={i} />);
    }

    return (
        <DrawerPaper
          variant="permanent"
        >
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <AddCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={ messages.add.defaultMessage } />
            </ListItem>
            { result }
          </List>
        </DrawerPaper>
    );
}


ListSidebar.propTypes = {
    items: PropTypes.number.isRequired,
};

export default ListSidebar;
