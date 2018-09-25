import React from 'react';
import PropTypes from 'prop-types';

import styled from 'components/styled';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

const drawerWidth = 300;

const MainMenu = styled(AppBar)(theme => ({
    fontFamily: "'Shadows Into Light', cursive",
    position: 'absolute',
    marginLeft: `${drawerWidth}px`,
    width: '100%',
  }));

function ListHeader({ message }) {
    return (
        <MainMenu>
            <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
                <FormattedMessage { ...message } />
            </Typography>
            </Toolbar>
        </MainMenu>
    );
}


ListHeader.propTypes = {
    message: PropTypes.object,
};
  
export default ListHeader;