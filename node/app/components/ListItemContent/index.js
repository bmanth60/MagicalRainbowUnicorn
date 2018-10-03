import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function ListItemContent({ onClick, onBlur, onChange, editable, text, typographyProps }) {
  if (editable) {
    return (
      <TextField
        fullWidth
        margin='normal'
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onBlur(e);
          }
        }}
        value={text}
        autoFocus={true}
      />
    )
  }

  return (
    <Typography
      {...typographyProps}
      onClick={onClick}
    >{text}
    </Typography>
  )
}


ListItemContent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  typographyProps: PropTypes.object,
  text: PropTypes.string,
};

export default ListItemContent;
