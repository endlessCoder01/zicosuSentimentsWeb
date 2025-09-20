import React from "react";
import Swal from "sweetalert2";

const LogoutPage = () => {
  // Logout handler
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1da1f2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear user session (localStorage, tokens, etc.)
        localStorage.clear();

        Swal.fire(
          "Logged Out",
          "You have been successfully logged out.",
          "success"
        ).then(() => {
          // Redirect to login page
          window.location.href = "/login"; // 🔹 adjust route to your login page
        });
      }
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Logout</h1>
        <p style={styles.text}>
          Click the button below if you wish to logout of your account.
        </p>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f5f8fa",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0px 6px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1da1f2",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    background: "#1da1f2",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};

export default LogoutPage;
