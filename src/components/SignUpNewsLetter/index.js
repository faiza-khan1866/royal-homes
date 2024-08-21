import React, { useState } from "react";
// import singupSideimg from "../../img/common/signup.png";
import singupSideimg from "../../img/common/signup.webp";
import Swal from "sweetalert2";
import commonApi from "../../apis/commonApi";
import "./style.css";
function SignUpNewsLetter() {
  const initialState = {
    email: "",
  };
  const [formData, setFormData] = React.useState({ ...initialState });
  const [isSeding, setIsSending] = useState(false);
  const { PostSubscriber } = commonApi();

  const HandleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    setIsSending(true);
    e.preventDefault();
    if (!formData.email) {
      setIsSending(false);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Email Address",
      });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      setIsSending(false);

      Swal.fire({
        icon: "error",
        title: "Email is Invalid",
      });
      return;
    }
    const response = await PostSubscriber(formData);
    if (response?.status == 200 || response?.status == 201) {
      Swal.fire({
        icon: "success",
        text: "Thank you for Subscribing to our Newsletter Program",
        confirmButtonColor: "#c21b1e",
      });
      setIsSending(false);
      setFormData({ ...initialState });
    }
  };
  return (
    <div id="sign-up-newsletter" data-aos="fade-down">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-side-container">
              <img
                className="Img_side"
                // src={singupSideimg}
                src="https://royal-home.b-cdn.net/website/signup.webp"
                alt="Sign-up"
                title="Sign-up"
                loading="lazy"
                height={"770"}
                width={"520"}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="signup-form-contianer">
              <span className="Signup_title">
                THE ONLY CANADIAN FIT OUT COMPANY IN DUBAI. RPH.{" "}
              </span>
              <p>
                Sign up for our newsletters for the latest offerings, news, &
                more.
              </p>
              <div class="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  class="form-control form-signup-input"
                  placeholder="Your Email address"
                  aria-label="Your Email address"
                  aria-describedby="basic-addon2"
                  value={formData.email}
                  onChange={HandleChange}
                  required
                />
                <div class="input-group-append">
                  <button
                    type="button"
                    class="btn from-signpu-btn "
                    onClick={handleSubmit}
                    disabled={isSeding}
                  >
                    {isSeding ? "Sending.." : "Subscribe Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpNewsLetter;
