import React, { useState } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";

const ChildModal = (props) => {
  return (
    <div>
      <button type="button" onClick={props.setModalOpen(true)}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={props.modalState}
        onClose={props.setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalState}>
          <div className="paper">
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ChildModal;
