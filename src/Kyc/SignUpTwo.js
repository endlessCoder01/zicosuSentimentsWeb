import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { APIURL } from "../services/config";

const SignUpTwo = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const [residential_location, setResidential_location] = useState();
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    setLoading(true);
    try {
      const lastPage = localStorage.getItem("user");
      const pageOne = await JSON.parse(lastPage);
      const image = await handleImageUpload(profileImage);

      // console.log("imageUri:", image);

      const new_User = {
        name: pageOne.name,
        surname: pageOne.surname,
        username: username,
        gender: pageOne.gender,
        dob: pageOne.dob,
        phone: phone,
        campus: pageOne.campus,
        residential_location: residential_location,
        email: email,
        reg_number: pageOne.reg_number,
        password: password,
        profilePic: image,
      };

        // console.log("new user", new_User)

      const response = await fetch(`${APIURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(new_User),
      });

      const result = await response.json();
      if (response.ok) {
        // console.log("response", result);
        Swal.fire({
          icon: "success",
          title: "Signed up Successfully",
          text: "Congratulations you have successfully joined our ZICOSU platform",
          confirmButtonColor: "green",
        });

        navigate("/home");
      } else {
        const errorMessage = result.error || "check internet connectivity";
        Swal.fire({
          icon: "error",
          title: "Signing Up Failed",
          text: errorMessage,
        });
        // console.error("SignUp error:", errorMessage);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during SignUp. Please check your network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };


  const handleImageUpload = async (imageUri) => {
    // console.log("Image", imageUri);

    // const formData = new FormData();
    // const fileName = imageUri.split("/").pop();
    // const type = `image/${fileName.split(".").pop()}`;

    // formData.append("image", {
    //   uri: imageUri,
    //   name: fileName,
    //   type: type,
    // });

  const formData = new FormData();
  formData.append("image", imageUri); 

    try {
      const response = await fetch(`${APIURL}/uploads`, {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });

      const data = await response.json();
      return `${data.path}`; // Return the full URL
    } catch (error) {
      console.error("Upload error:", error);
      throw new Error("Failed to upload image");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        // background: "linear-gradient(to bottom right, #002966, #001a4d)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            padding: "28px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
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
            <p
              style={{
                color: "#bea7a7ff",
                fontSize: "17px",
                fontWeight: "bold",
                marginTop: "4px",
              }}
            >
              Page 2 of 2
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {/*pp*/}
            <div style={{ textAlign: "center" }}>
              <label
                htmlFor="profileImage"
                style={{
                  display: "inline-block",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #003315ff",
                    margin: "1px auto 4px",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {profileImagePreview ? (
                    <img
                      src={profileImagePreview}
                      alt="Profile Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span style={{ color: "#9ca3af", fontSize: "14px" }}>
                      No Image
                    </span>
                  )}
                </div>

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ec1212ff",
                    color: "white",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#cf533dff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#ec1212ff")
                  }
                >
                  Upload Profile Picture
                </span>
              </label>

              {/* Hidden File Input */}
              <input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProfileImage(file);
                    setProfileImagePreview(URL.createObjectURL(file));
                  }
                }}
                style={{ display: "none" }}
              />
            </div>

            {/* current address*/}
            <div>
              <select
                value={residential_location}
                onChange={(e) => setResidential_location(e.target.value)}
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
                <option value="">Select Your Current Residential Area</option>
                <option value="main">Main Campus Residential Area</option>
                <option value="new complex">
                  New Complex Residential Area{" "}
                </option>
                <option value="off campus">Off Campus</option>
              </select>
            </div>

            {/*contact */}
            <div>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

            {/*username*/}
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your Username"
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

            {/*password*/}
            <div>
              <input
                type="password"
                value={confirm_password}
                onChange={(e) => setConfirm_Password(e.target.value)}
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
