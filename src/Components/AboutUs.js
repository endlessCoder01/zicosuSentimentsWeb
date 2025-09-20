import React from "react";
import About from "./About";

const AboutUs = () => {
  const sections = [
    {
      title: "Who We Are",
      content:
        "We are a passionate team dedicated to empowering communities through education, innovation, and technology. Our platform provides a space for people to share knowledge, connect, and grow together.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to make education and opportunities accessible to everyone, regardless of background. We strive to create a supportive environment that inspires collaboration and continuous learning.",
    },
    {
      title: "Our Vision",
      content:
        "We envision a world where every individual has equal access to knowledge and tools to succeed, fostering a brighter and more inclusive future for all.",
    },
  ];

  const team = [
    {
      name: "Jane Doe",
      role: "Chief Executive Officer (CEO)",
      image: "https://via.placeholder.com/150", // replace with your real image path
    },
    {
      name: "Mark Smith",
      role: "Secretary",
      image: "https://via.placeholder.com/150", // replace with your real image path
    },
    {
      name: "Alice Johnson",
      role: "Founder",
      image: "https://via.placeholder.com/150", // replace with your real image path
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.subheader}>
        Learn more about our story, our values, and the team behind our mission.
      </p>

      {/* Info Cards */}
      <div style={styles.cardContainer}>
        {sections.map((section, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>{section.title}</h2>
            <p style={styles.cardContent}>{section.content}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <h2 style={{ ...styles.header, marginTop: "50px" }}>Our Team</h2>
      <div style={styles.teamContainer}>
        {team.map((member, index) => (
          <div key={index} style={styles.teamCard}>
            <img
              src={member.image}
              alt={member.name}
              style={styles.teamImage}
            />
            <h3 style={styles.teamName}>{member.name}</h3>
            <p style={styles.teamRole}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    textAlign: "center",
  },
  header: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#333",
  },
  subheader: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1da1f2",
    marginBottom: "10px",
  },
  cardContent: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.6",
  },
  teamContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  teamCard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "center",
  },
  teamImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  teamName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1da1f2",
  },
  teamRole: {
    fontSize: "14px",
    color: "#555",
  },
};

export default AboutUs;
