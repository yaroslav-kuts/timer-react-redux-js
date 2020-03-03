import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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

export default Alert;
