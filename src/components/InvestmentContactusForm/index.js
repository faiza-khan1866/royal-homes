import React, { useRef, useState } from "react";
import commonApi from "../../apis/commonApi";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { motion, useAnimation } from "framer-motion";
import Swal from "sweetalert2";
import PolicyPopUp from "..//PolicyPopUp";
import s from "./style.module.css";

//
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function InvestmentContactusForm() {
  const initialState = {
    name: "",
    phone: "+971",
    email: "",
    subject: "",
    message: "",
    service_type: "RPH Investment Support",
    form_type: "contact_us",
  };
  const initialErrorState = {
    name: false,
    phone: false,
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
    }
    if (formValues.phone == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Phone Number." }));
      setFormError((prev) => ({ ...prev, phone: true }));

      setOpen(true);
      setIsSending(false);

      return;
    } else if (
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-8]{4,6}$/im.test(
        formValues?.phone
      ) == false
    ) {
      setErrors((prev) => ({ ...prev, message: "Invalid Phone Number." }));
      setFormError((prev) => ({ ...prev, phone: true }));

      setOpen(true);
      setIsSending(false);

      return;
    } else if (formValues?.phone?.length <= 10) {
      setErrors((prev) => ({ ...prev, message: "Invalid Phone Number." }));
      setFormError((prev) => ({ ...prev, phone: true }));

      setOpen(true);
      setIsSending(false);
    }
    if (formValues.subject == "") {
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
          <div className="row">
            <div className="col-lg-6">
              <div className={s.headingMain} data-aos="fade-down">
                <h3 className="sub-title">Support</h3>
                <h2 className="section-title">Want to Learn More?</h2>
                <p>Fill the form to get in touch with us</p>
              </div>
            </div>
            <div className="col-lg-6">
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
                      placeholder="Full Name"
                      name="name"
                      onChange={changeInput}
                      value={formValues.name}
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
                  <div className="col-md-6">
                    <div className="form-field">
                      <input
                        class={
                          formError.phone
                            ? `${s.error} form-control `
                            : "form-control "
                        }
                        value={formValues.phone}
                        onChange={changeInput}
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
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
                      {" "}
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

export default InvestmentContactusForm;
