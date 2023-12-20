import { useEffect } from "react";
import Aux from "./Aux";
import "./Popup.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const Popup = ({ modalState, handleCloseModal, handleOkModal }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Aux>
      <Dialog
        open={modalState.modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalState.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalState.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOkModal} autoFocus>
            {modalState.labelOk}
          </Button>
        </DialogActions>
      </Dialog>
    </Aux>
  );
};

export default Popup;
