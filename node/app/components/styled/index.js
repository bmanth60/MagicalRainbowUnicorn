import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

export default function styled(Component) {
  return (s, o) => {
    function StyledComponent(props) {
      const { classes, className, ...other } = props;
      return (
        <Component className={classNames(classes.root, className)} {...other} />
      );
    }

    StyledComponent.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
    };

    let styles = { root: s };
    if (typeof s === 'function') {
      styles = theme => ({ root: s(theme) });
    }

    return withStyles(styles, o)(StyledComponent);
  };
}
