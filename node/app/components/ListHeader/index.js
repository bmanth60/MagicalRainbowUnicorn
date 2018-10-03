import React from 'react';
import PropTypes from 'prop-types';

import styled from 'components/styled';
import ListItemContent from 'components/ListItemContent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 300;

const HeaderBar = styled(AppBar)(theme => ({
    fontFamily: "'Shadows Into Light', cursive",
    position: 'absolute',
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    '& input': {
      color: 'white',
    }
  }));

function ListHeader({ onToggle, onEdit, onDelete, editing, message }) {
    return (
        <HeaderBar>
            <Toolbar>
              <ListItemContent
                onClick={(e) => { onToggle(true); }}
                onBlur={(e) => { onToggle(false); }}
                onChange={(e) => { onEdit(e.target.value); }}
                typographyProps={{variant: 'title', color: 'inherit', noWrap: true}}
                editable={editing}
                text={message}
              />
            </Toolbar>
        </HeaderBar>
    );
}


ListHeader.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default ListHeader;
