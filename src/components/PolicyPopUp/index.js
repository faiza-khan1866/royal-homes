import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
function PolicyPopUp(props) {
  return (
    <div className="PrivacyPop11">
      {" "}
      <Dialog
        open={props.openPolicy}
        onClose={props.handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          RPH BUILDING CONTRACTING L.L.C PRIVACY STATEMENT POLICY
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="PolicyContainer">
              <div className="PolicyBG" />
              <p>
                RPH Building Contracting L.L.C, along with its affiliates,
                places great importance on your privacy and values your trust as
                a client. We aim to clearly explain how we gather, utilize, and
                share information.
              </p>
              <p>
                This Privacy Statement details our practices regarding the data
                we collect:
              </p>

              <ul className="PrivacyPolicy_list">
                <li>
                  Through websites we operate, from which you access this
                  Privacy Statement, including our own sites and other sites
                  managed by RPH Building Contracting L.L.C (collectively
                  referred to as the "Websites").
                </li>
                <li>
                  Through software applications provided by us for use on
                  computers and mobile devices (the "Apps").
                </li>
                <li>
                  Via our social media pages, which we manage and through which
                  you access this Privacy Statement (together, our "Social Media
                  Pages").
                </li>
                <li>
                  Through HTML-formatted email messages we send linking to this
                  Privacy Statement and your interactions with us.
                </li>
                <li>Through API messages</li>
              </ul>
              <p>
                These various channels, including the Websites, Apps, and Social
                Media Pages, are collectively termed the "Online Services".
                Along with offline methods, they constitute the "Services". By
                utilizing these Services, you consent to the terms of this
                Privacy Statement.
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClickClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PolicyPopUp;
