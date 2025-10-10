import React, { useState } from "react";
import Swal from "sweetalert2";
import { URL } from "../services/config";

const Contact = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEmail();
  };

  const submitEmail = async () => {
    // console.log("captured email", email);
    try {
      const response = await fetch(`${URL}/email/not_signed`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, signedIn: "no" }),
      });

      const result = await response.json();
      // console.log("email", result);
      if (response.ok) {

        Swal.fire({
          toast: false,
          icon: "success",
          title: "email submitted successful",
          text: "you shall start receiving emails related to ZICOSU",
          showConfirmButton: true,
          timer: 2000,
          timerProgressBar: false,
        });
      } else {
        // console.log(result)
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: result.error || "check your connectivity and try again",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.text || "check your connectivity and try again",
      });
    }
  };
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
