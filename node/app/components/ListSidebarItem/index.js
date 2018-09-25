import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import Divider from '@material-ui/core/Divider';

function ListSidebarItem({ itemKey }) {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary={ "List: " + itemKey } />
            </ListItem>
            <Divider />
        </div>
    );
}

ListSidebarItem.propTypes = {
    itemKey: PropTypes.number,
};
  
export default ListSidebarItem;