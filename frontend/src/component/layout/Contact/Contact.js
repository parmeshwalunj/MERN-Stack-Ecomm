import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:parmeshwalunj@gmail.com">
        <Button>Contact: parmeshwalunj@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:wamaneniharika@gmail.com">
        <Button>Contact: wamaneniharika@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:aishuyadav230501@gmail.com">
        <Button>Contact: aishuyadav230501@gmail.com</Button>
      </a>
      <a className="mailBtn" href="mailto:deepshelke@gmail.com">
        <Button>Contact: deepshelke@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
