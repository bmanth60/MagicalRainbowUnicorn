import React from 'react';
import PropTypes from 'prop-types';

import styled from 'components/styled';

import Paper from '@material-ui/core/Paper';

const Panel = styled(Paper)(theme => ({
    backgroundClip: 'padding-box',
    border: '1px solid transparent',
    padding: theme.spacing.unit * 1,
}));

function Card(props) {
    return (
        <Panel elevation={1}>
            { props.children }
        </Panel>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
