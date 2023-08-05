import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ResetDialogProps = {
  open: boolean;
  handleClose: () => void;
  reset: () => void;
};

export const ResetDialog = ({ open, handleClose, reset }: ResetDialogProps) => {
  const handleReset = () => {
    reset();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Article reset"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to reset the article?
          <br />
          You will lose all unsaved changes.
          <br />
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>No</Button>
        <Button onClick={handleReset}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
