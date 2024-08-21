import React, { useEffect, useState } from "react";
import commonApi from "../../apis/commonApi";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import { motion } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useParams, useLocation, useHistory } from "react-router-dom";
import s from "./style.module.css";
import { AiOutlineUpload } from "react-icons/ai";
import PolicyPopUp from "../PolicyPopUp";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// search Query
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
// search query end
function ContactFrom({ globalLanguage }) {
  const { policy } = useParams();
  const history = useHistory();

  const initialState = {
    name: "",
    // last_name: "",
    email: "",
    phone: "+971",
    service_type: "",
    message: "",
    attachment: "",
    form_type: "contact_us",
  };
  const initialErrorState = {
    name: false,
    // last_name: false,
    email: false,
    phone: false,
    service_type: false,
    message: false,
    fileUpload: false,
  };
  let query = useQuery();
  const [formValues, setFormValues] = useState({ ...initialState });
  const [formError, setFormError] = useState({ ...initialErrorState });
  const [fileUpload, setFileUpload] = useState(null);
  const [isSeding, setIsSending] = useState(false);
  const [error, setErrors] = useState({ message: "" });
  const [open, setOpen] = React.useState(false);
  const { PostContactUs } = commonApi();
  const [openPolicy, setOpenPolicy] = React.useState(false);

  useEffect(() => {
    if (query.get("service") && query.get("service") !== "") {
      setFormValues((prev) => ({
        ...prev,
        service_type: query.get("service"),
      }));
    }
  }, [query.get("service")]);

  useEffect(() => {
    if (policy) {
      handleClickOpen();
    }
  }, [policy]);

  const handleClickOpen = () => {
    setOpenPolicy(true);
    history.push(`/${globalLanguage}/contact/policy`);
  };

  const handleClickClose = () => {
    setOpenPolicy(false);
    // history.push(`/${globalLanguage}/contact`);
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
  const changeHandler = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const fileChanghandler = (e) => {
    if (e.target.files) {
      setFileUpload(e.target.files[0]);
    }
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
    // if (formValues.last_name == "") {
    //   setErrors((prev) => ({ ...prev, message: "Please Enter Last Name." }));
    //   setFormError((prev) => ({ ...prev, last_name: true }));
    //   setOpen(true);
    //   setIsSending(false);

    //   return;
    // }

    if (formValues?.email == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Email." }));
      setFormError((prev) => ({ ...prev, email: true }));

      setOpen(true);
      setIsSending(false);

      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues?.email)
    ) {
      setErrors((prev) => ({ ...prev, message: "Invalid email address." }));
      setFormError((prev) => ({ ...prev, email: true }));

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
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
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
      return;
    }
    if (formValues.service_type == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Subject." }));
      setFormError((prev) => ({ ...prev, service_type: true }));

      setOpen(true);
      setIsSending(false);

      return;
    }
    // if (fileUpload == null) {
    //   setErrors((prev) => ({ ...prev, message: "Please Add Attachment." }));
    //   setFormError((prev) => ({ ...prev, fileUpload: true }));

    //   setOpen(true);
    //   setIsSending(false);

    //   return;
    // }
    if (formValues.message == "") {
      setErrors((prev) => ({ ...prev, message: "Please Enter Message" }));
      setFormError((prev) => ({ ...prev, message: true }));

      setOpen(true);
      setIsSending(false);

      return;
    }
    // return;
    let updatedData = { ...formValues };
    // console.log(updatedData);
    // return;
    let imagesFormData = new FormData();
    imagesFormData.append("attachment", fileUpload);
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
      setFileUpload("");
    }
  };

  return (
    <>
      <motion.div className="errorMessageForm" onClick={handleClick}>
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

      <form className={s.contact_form}>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                class={formError.name ? `${s.error} ` : ""}
                value={formValues.name}
                onChange={changeHandler}
                type="text"
                name="name"
                placeholder="Full Name *"
              />
            </div>
          </div>
          {/* <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                class={
                  formError.last_name
                    ? `${s.error} form-control`
                    : "form-control"
                }
                value={formValues.last_name}
                onChange={changeHandler}
                type="text"
                name="last_name"
                placeholder="Last Name *"
              />
            </div>
          </div> */}
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                class={formError.email ? `${s.error} ` : ""}
                onChange={changeHandler}
                value={formValues?.email}
                type="email"
                name="email"
                placeholder="Email *"
              />
            </div>
          </div>
          {/* <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                class={formError.subject ? `${s.error} ` : ""}
                onChange={changeHandler}
                value={formValues.subject}
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
          </div> */}
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <input
                class={formError.phone ? `${s.error} ` : ""}
                value={formValues.phone}
                onChange={changeHandler}
                type="tel"
                name="phone"
                placeholder="Phone *"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <select
                id="service_type"
                name="service_type"
                value={formValues.service_type}
                class={formError.service_type ? `${s.error} ` : ""}
                onChange={changeHandler}
              >
                <option value="" selected disabled>
                  Service Type *
                </option>

                <option value="Fit Out & Renovation">
                  Fit Out & Renovation
                </option>
                <option value="Full Construction">Full Construction</option>
                <option value="RPH Investment Support">
                  RPH Investment Support
                </option>
                <option value="Maintenance">Maintenance</option>
                <option value="Commercial Fit Out">Commercial Fit Out</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
              <label htmlFor="file" className={s.fileLabel}>
                <div className={s.labelName}>
                  Attachment{" "}
                  <div className={s.fileIdea}>
                    (i.e: Floorplans Inspirations, Designs)
                  </div>
                </div>
                <div className={formError.fileUpload ? `${s.error} ` : ""}>
                  {fileUpload && (
                    <span className={`${s.FileName} ${s.FiledeskTop}`}>
                      File: {fileUpload?.name}{" "}
                    </span>
                  )}{" "}
                  <AiOutlineUpload size={25} />
                </div>
              </label>
              <input
                class={s.FileINput}
                // value={formValues.phone}
                onChange={fileChanghandler}
                type="file"
                name="file"
                id="file"
                placeholder="file"
              />
            </div>
          </div>
          {fileUpload && (
            <div className="col-lg-12 col-sm-12">
              <div className="form-field mb-2">
                <span className={`${s.FileName} ${s.FileMobil}`}>
                  File: {fileUpload?.name}{" "}
                </span>
              </div>
            </div>
          )}

          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
              <textarea
                class={formError.message ? `${s.error} ` : ""}
                value={formValues.message}
                name="message"
                placeholder="Message *"
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>
          <div className="col-12 mt-2">
            <p>
              By Contacting and/or Signing Up, I agree acknowledge RPH’s Privacy
              Policy Statement located in the{" "}
              <span className={s.policy} onClick={handleClickOpen}>
                Privacy Centre
              </span>
            </p>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-action">
              <button
                className="form-button"
                type="button"
                onClick={handleSubmit}
                disabled={isSeding}
              >
                {isSeding ? "Sending" : "  Send Message"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactFrom;
