import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

const Alert = (props) => {
  const { isOpen, message, onClick } = props;

  return (
    <Dialog open={isOpen} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Error</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};


Alert.defaultProps = {
  isOpen: false,
  message: '',
  onClick: () => {},
};

Alert.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onClick: PropTypes.func,
};

export default Alert;
