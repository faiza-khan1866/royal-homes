import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
function Appointment({ setShowAppointment, showAppoint }) {
  return (
    <>
      <Modal
        show={showAppoint}
        onHide={() => setShowAppointment(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {/* <InlineWidget url="https://calendly.com/dimen-z38/book-a-consultation-with-rph" /> */}
          {/* <InlineWidget url="https://calendly.com/rphuae/consultation-with-rph" /> */}
          <InlineWidget url="https://calendly.com/rph-uae/30min" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowAppointment(false)} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Appointment;
