import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { URL } from "../services/config";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("login", result);
        if (result.token.userDetails.user.status === "active") {
          onLogin();

          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: `this account is ${result.token.userDetails.user.status}`,
          });
        }
      } else {
        const errorMessage =
          result.response || "Invalid credentials or user not found.";
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: errorMessage,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during login. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserDetails();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            padding: "32px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ec1212ff",
                marginBottom: "8px",
              }}
            >
              Welcome Back
            </h1>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Please sign in to your account
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Email */}
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  transition: "all 0.2s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#ffc000";
                  e.target.style.boxShadow = "0 0 0 2px #ffc00055";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  transition: "all 0.2s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#ffc000";
                  e.target.style.boxShadow = "0 0 0 2px #ffc00055";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                backgroundColor: loading ? "#9ca3af" : "#ec1212ff",
                color: "#fff",
                fontWeight: "500",
                fontSize: "15px",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.target.style.backgroundColor = "#cf533dff";
              }}
              onMouseLeave={(e) => {
                if (!loading) e.target.style.backgroundColor = "#ec1212ff";
              }}
            >
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "3px solid transparent",
                      borderTop: "3px solid white",
                      borderBottom: "3px solid white",
                      borderRadius: "50%",
                      marginRight: "8px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div
            style={{
              margin: "24px 0",
              position: "relative",
              textAlign: "center",
            }}
          >
            <div
              style={{
                borderTop: "1px solid #d1d5db",
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
              }}
            ></div>
            <span
              style={{
                position: "relative",
                backgroundColor: "#fff",
                padding: "0 8px",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Need help?
            </span>
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              style={{
                color: "#002966",
                fontWeight: "500",
                fontSize: "14px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ee5237ff")}
              onMouseLeave={(e) => (e.target.style.color = "#ec1212ff")}
            >
              Forgot Password?
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "13px",
            color: "#e5e7eb",
          }}
        >
          © 2026 ZICOSU. All rights reserved.
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
