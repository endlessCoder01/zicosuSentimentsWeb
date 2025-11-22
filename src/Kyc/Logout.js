import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignOut = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    LogOut();
  }, []);

  const LogOut = async () => {
    try {
      logout();

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Logged out successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during logout. Please try again.",
      });
    }
  };

  return null;
};

export default SignOut;
