import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

const SignUpTwo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    setLoading(true);
    try {

          Swal.fire({
          icon: "success",
          title: "Welcome Back",
          text: "Welcome",
        });

        navigate("/home");

    //   const hashedPassword = MD5(password).toString();
    //   const response = await fetch(
    //     `${API_URL}/users/login/${email}/${hashedPassword}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   const result = await response.json();
    //   if (response.ok && result.length > 0) {
    //     const user = result[0].userid;
    //     const role = result[0].role;
    //     const username = result[0].username;
    //     if (result[0].status === "active") {
    //       localStorage.setItem("adminId", user);
    //       localStorage.setItem("role", role);
    //       localStorage.setItem("userDetails", JSON.stringify(result[0]));
    //       localStorage.setItem("userName", username);
    //       navigate(role === "Human Resources" ? "/HrHome" : "/Dashboard");
    //     }
    //   } else {
    //     const errorMessage =
    //       result.message || "Invalid credentials or user not found.";
    //     Swal.fire({
    //       icon: "error",
    //       title: "Login Failed",
    //       text: errorMessage,
    //     });
    //     console.error("Login error:", errorMessage); 
    //   }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during login. Please try again.",
      });
      console.error("Error fetching user details:", error); 
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
        // background: "linear-gradient(to bottom right, #002966, #001a4d)",
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
         
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ec1212ff",
                marginBottom: "5px",
              }}
            >
              Almost There...
            </h1>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Closer to finishing the signup...
            </p>
            <p style={{ color: "#bea7a7ff", fontSize: "17px", fontWeight: "bold", marginTop: "6px" }}>
              Page 2 of 2
            </p>
          </div>

        
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/*pp*/}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your pp"
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

            {/* home address*/}
            <div>
  
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your Address"
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

            {/*contact */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your phone number"
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

            {/*email*/}
            <div>
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

            {/*password*/}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {/*password*/}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Confirm your password"
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
                  Signing Up...
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>

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

export default SignUpTwo;
