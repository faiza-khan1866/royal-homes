import React, { useRef, useState } from "react";
import commonApi from "../../apis/commonApi";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { motion, useAnimation } from "framer-motion";
import Swal from "sweetalert2";
import s from "./style.module.css";
import PolicyPopUp from "../PolicyPopUp";

//
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function FaqsContentusForm() {
  const initialState = {
    name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
    service_type: "FAQs",
    form_type: "contact_us",
  };
  const initialErrorState = {
    name: false,
    last_name: false,
    email: false,
    subject: false,
    message: false,
  };
  const [formValues, setFormValues] = useState({ ...initialState });
  const [formError, setFormError] = useState({ ...initialErrorState });
  const [isSeding, setIsSending] = useState(false);
  const [error, setErrors] = useState({ message: "" });
  const [open, setOpen] = React.useState(false);
  const [openPolicy, setOpenPolicy] = React.useState(false);

  const { PostContactUs } = commonApi();

  const handleClickOpen = () => {
    setOpenPolicy(true);
  };

  const handleClickClose = () => {
    setOpenPolicy(false);
  };

  const handleClick = () => {
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const changeInput = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrors({ message: "" });
    setFormError({ ...initialErrorState });
    if (formValues.name == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Name." }));
      setFormError((prev) => ({ ...prev, name: true }));
      setOpen(true);
      setIsSending(false);

      return;
    }
    if (formValues.last_name == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Last Name." }));
      setFormError((prev) => ({ ...prev, last_name: true }));

      setOpen(true);
      setIsSending(false);

      return;
    }
    if (formValues?.email == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Email." }));
      setFormError((prev) => ({ ...prev, email: true }));

      setOpen(true);
      setIsSending(false);

      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues?.email)
    ) {
      setFormError((prev) => ({ ...prev, email: true }));

      setErrors((prev) => ({ ...prev, message: "Invalid email address." }));
      setOpen(true);
      setIsSending(false);

      return;
    } else if (formValues.subject == "") {
      setFormError((prev) => ({ ...prev, subject: true }));
      setErrors((prev) => ({ ...prev, message: "Please Enter Subject." }));
      setOpen(true);
      setIsSending(false);

      return;
    } else if (formValues.message == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Message" }));
      setFormError((prev) => ({ ...prev, message: true }));
      setOpen(true);
      setIsSending(false);

      return;
    }
    let updatedData = { ...formValues };
    let imagesFormData = new FormData();
    imagesFormData.append("data", JSON.stringify(updatedData));
    let header = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${imagesFormData._boundary}`,
      },
    };
    const response = await PostContactUs(imagesFormData, header);
    if (response?.status == 200 || response?.status == 201) {
      Swal.fire({
        icon: "success",
        text: "Thank you, Our Team will get in Touch with you soon!",
        confirmButtonColor: "#c21b1e",
      });
      setIsSending(false);
      setFormValues({ ...initialState });
    }
  };
  return (
    <>
      <motion.div
        className="errorMessageForm"
        onClick={handleClick}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        <Snackbar
          autoHideDuration={1300}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          open={open}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%", position: "sticky", top: "20px" }}
          >
            {error.message ? error.message : ""}
          </Alert>
        </Snackbar>
      </motion.div>
      <>
        <PolicyPopUp
          openPolicy={openPolicy}
          handleClickClose={handleClickClose}
          handleClickOpen={handleClickOpen}
        />
      </>
      <div className={s.InvestmentContactUsForm}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={s.headingMain} data-aos="fade-down">
                {/* <h3 className="sub-title">Support</h3> */}
                <h2 className="section-title">Connect With Us</h2>
                <p className={s.Contact_dieails}>
                  Need an Answer to a Different Question? Ask us Below
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={s.contactFormWrapper} data-aos="fade-down">
                <div class="row g-3">
                  <div class="col-md-6">
                    <input
                      type="text"
                      class={
                        formError.name
                          ? `${s.error} form-control`
                          : "form-control"
                      }
                      placeholder="First Name"
                      name="name"
                      onChange={changeInput}
                      value={formValues.name}
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class={
                        formError.last_name
                          ? `${s.error} form-control`
                          : "form-control"
                      }
                      placeholder="Last Name"
                      name="last_name"
                      onChange={changeInput}
                      value={formValues.last_name}
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="email"
                      class={
                        formError.email
                          ? `${s.error} form-control`
                          : "form-control"
                      }
                      placeholder="Email"
                      name="email"
                      onChange={changeInput}
                      value={formValues.email}
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class={
                        formError.subject
                          ? `${s.error} form-control`
                          : "form-control"
                      }
                      placeholder="subject"
                      name="subject"
                      onChange={changeInput}
                      value={formValues.subject}
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      type="text"
                      class={
                        formError.message
                          ? `${s.error} form-control`
                          : "form-control"
                      }
                      placeholder="message"
                      style={{
                        height: "200px",
                      }}
                      name="message"
                      onChange={changeInput}
                      value={formValues.message}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <p>
                      By Contacting and/or Signing Up, I agree acknowledge RPH’s
                      Privacy Policy Statement located in the{" "}
                      <span className={s.policy} onClick={handleClickOpen}>
                        Privacy Centre
                      </span>
                    </p>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn-fill"
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSeding}
                    >
                      {isSeding ? "Sending" : "  Send Message"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqsContentusForm;
