import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SignOut = ({ onLogout }) => {
  useEffect(() => {
    LogOut();
  }, []);

  const LogOut = async () => {
    try {
      localStorage.clear();
      onLogout();

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Logged Out successful",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during logout. Please try again.",
      });
    }
  };
};

export default SignOut;
