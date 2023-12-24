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
import React from "react";

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
        <DialogTitle id="alert-dialog-title" className="popupTitle">
          {modalState.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="popupDescription"
          >
            {modalState.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="popupBtn" onClick={handleOkModal} autoFocus>
            {modalState.labelOk}
          </Button>
        </DialogActions>
      </Dialog>
    </Aux>
  );
};

export default Popup;
