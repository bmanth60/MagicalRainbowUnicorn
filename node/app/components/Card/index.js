import React from 'react';
import PropTypes from 'prop-types';

import styled from 'components/styled';

import Paper from '@material-ui/core/Paper';

const Panel = styled(Paper)(theme => ({
  backgroundClip: 'padding-box',
  border: '1px solid transparent',
  padding: theme.spacing.unit * 1,
}));

function Card({ children, style }) {
  return (
    <Panel style={style} elevation={1}>
      {children}
    </Panel>
  );
}

Card.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Card;
