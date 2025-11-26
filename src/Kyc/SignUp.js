import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpOne = () => {
  const [reg_number, setReg_number] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [campus, setCampus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveLocaldetails = async () => {
    setLoading(true);
    try {
      const user = {
        reg_number: reg_number,
        name: name,
        surname: surname,
        dob: dob,
        gender: gender,
        campus: campus,
      };

      // console.log("user", user);
      localStorage.setItem("user", JSON.stringify(user));

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "One more step",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        color: "rgba(9, 71, 28, 0.75)",
      });

      navigate("/signup/two");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during login. Please try again.",
      });
      console.error("Error fetching user details:", error); // Log error to console
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveLocaldetails();
  };

  const signIn = () => {
    navigate("/login");
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
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ec1212ff",
                marginBottom: "5px",
              }}
            >
              Welcome
            </h1>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Please create your account
            </p>
            <p
              style={{
                color: "#bea7a7ff",
                fontSize: "17px",
                fontWeight: "bold",
                marginTop: "6px",
              }}
            >
              Page 1 of 2
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "13px" }}
          >
            {/* reg_number */}
            <div>
              <input
                type="text"
                value={reg_number}
                onChange={(e) => setReg_number(e.target.value)}
                required
                placeholder="Enter your Student Number"
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

            {/* name*/}
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
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

            {/* surname */}
            <div>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
                placeholder="Enter your surname"
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

            {/*dob */}
            <div>
              <label
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "#424344ff",
                  display: "block",
                  marginBottom: "2px",
                  marginLeft: "3px",
                }}
              >
                Date of Birth:
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                placeholder="Enter your DOB"
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

            {/*gender */}
            <div>
              {/* <label
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "#424344ff",
                  display: "block",
                  marginBottom: "4px",
                  marginLeft: "3px",
                }}
              >
                Gender:
              </label> */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#424344ff",
                  }}
                >
                  <input
                    type="radio"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    required
                  />
                  Male
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#424344ff",
                  }}
                >
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    required
                  />
                  Female
                </label>
              </div>
            </div>

            {/*campus*/}
            <div>
              <select
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
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
              >
                <option value="">Select Campus</option>
                <option value="fse">FSE Campus</option>
                <option value="town">Town Campus</option>
                <option value="main">Main Campus</option>
              </select>
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
                  Loading...
                </div>
              ) : (
                "Next"
              )}
            </button>
          </form>

          {/* Divider */}
          <div
            style={{
              margin: "18px 0",
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
              Already have an account?
            </span>
          </div>

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
              onClick={signIn}
            >
              Sign In
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "5px",
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

export default SignUpOne;
