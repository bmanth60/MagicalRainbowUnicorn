import React from 'react';
import PropTypes from 'prop-types';

import styled from 'components/styled';
import ListItemContent from 'components/ListItemContent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
              <Grid container spacing={0} alignItems="baseline">
                <Grid item xs={11}>
                  <ListItemContent
                    onClick={(e) => { onToggle(true); }}
                    onBlur={(e) => { onToggle(false); }}
                    onChange={(e) => { onEdit(e.target.value); }}
                    typographyProps={{variant: 'title', color: 'inherit', noWrap: true}}
                    editable={editing}
                    text={message}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={(e) => { onDelete(); }} aria-label="Delete" color="inherit" >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
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
