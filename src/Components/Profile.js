import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Userimage from "../Assets/theTeam/user.png"

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [newData, setNewData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    profilePic: "",
  });
  const API_URL = "http://localhost:5001/upload";

  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState();

  //   {
  //   name: "Munashe Mudoti",
  //   email: "munashe@example.com",
  //   phone: "+263 771 123 456",
  //   location: "Harare, Zimbabwe",
  //   bio: "Tech enthusiast • Full Stack Developer • Lifelong learner",
  //   profilePic:
  //     "https://i.pinimg.com/564x/85/62/eb/8562eb94d87780b24c81b2972e57cbd0.jpg", // demo image
  // }

  useEffect(() => {
    getUserLocal();
  }, []);

  useEffect(() => {
    if (token) {
      fetchProfilePic();
    }

    // const interval = setInterval(() => {
    //  fetchProfilePic();
    // }, 3000);

    // return () => clearInterval(interval);
  }, [token]);

  const getUserLocal = async () => {
    const data = localStorage.getItem("activeUser");
    if (!data) return;
    const user = JSON.parse(data);
    console.log("hoyo", user.token.userDetails.user);
    setToken(user.token.token);
    setUser(user.token.userDetails.user);
  };

  const fetchProfilePic = async () => {
    try {
      const res = await fetch(`${API_URL}/${user.reg_number}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch profilePic");
      const data = await res.json();

      console.log("profile", data);
      const dum = { ...user, profilePic: data.file_url };
      console.log("hdfsjk", dum);
      setUser(dum);
      setNewData(dum);
    } catch (error) {
      console.error("Error fetching pp:", error);
      Swal.fire(
        "Error",
        "Could not load sentiments. Please try again.",
        "error"
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSave = () => {
    setUser(newData);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) =>
        setNewData({ ...newData, profilePic: e.target.result });
      reader.readAsDataURL(file);
    }
  };

  //Styles
  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      minHeight: "100vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backdropFilter: "blur(5px)",
      padding: "50px 20px",
    },
    card: {
      backgroundColor: "rgba(255,255,255,0.9)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
      borderRadius: 20,
      padding: "40px 60px",
      width: "90%",
      maxWidth: 700,
      textAlign: "center",
      transition: "0.3s",
    },
    banner: {
      height: 120,
      background: "linear-gradient(90deg, #6B6F1D, #FCE023, #6B6F1D, #000000)",
      borderRadius: 20,
      marginBottom: -80,
      filter: "blur(0.5px)",
    },
    profilePicContainer: {
      position: "relative",
      width: 160,
      height: 160,
      margin: "auto",
    },
    profilePic: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid white",
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    },
    editPicButton: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: "#6B6F1D",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: 40,
      height: 40,
      cursor: "pointer",
      fontSize: 18,
      boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
    },
    name: {
      fontSize: 26,
      fontWeight: 700,
      marginTop: 20,
    },
    bio: {
      fontStyle: "italic",
      color: "#555",
      marginBottom: 30,
    },
    fieldGroup: {
      textAlign: "left",
      marginBottom: 20,
    },
    label: {
      fontWeight: 600,
      display: "block",
      marginBottom: 6,
    },
    input: {
      width: "100%",
      padding: "10px 15px",
      borderRadius: 10,
      border: "1px solid #ccc",
      fontSize: 15,
      outline: "none",
      transition: "0.2s",
    },
    button: {
      backgroundColor: "#6B6F1D",
      color: "white",
      padding: "12px 25px",
      border: "none",
      borderRadius: 25,
      cursor: "pointer",
      fontSize: 16,
      fontWeight: "bold",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      marginTop: 20,
      transition: "0.3s",
    },
  };

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading profile...</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.banner}></div>

      <div style={styles.card}>
        <div style={styles.profilePicContainer}>
          <img
            src={
              newData?.profilePic
                ? `http://localhost:5001/${newData.profilePic.replace(
                    /\\/g,
                    "/"
                  )}`
                :  Userimage
            }
            alt="Profile"
            style={styles.profilePic}
          />
          <label htmlFor="profilePicUpload">
            <button style={styles.editPicButton}>✏️</button>
          </label>
          <input
            type="file"
            id="profilePicUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.bio}>{user.bio}</p>

        {isEditing ? (
          <>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                name="name"
                value={newData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email</label>
              <input
                name="email"
                value={newData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Phone</label>
              <input
                name="phone"
                value={newData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Location</label>
              <input
                name="location"
                value={newData.location}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Bio</label>
              <input
                name="bio"
                value={newData.bio}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <button style={styles.button} onClick={handleSave}>
              💾 Save Changes
            </button>
          </>
        ) : (
          <>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
            <p>
              <b>Location:</b> {user.location}
            </p>
            <button style={styles.button} onClick={() => setIsEditing(true)}>
              ✏️ Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
