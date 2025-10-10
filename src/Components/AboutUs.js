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
      "We aim to develop and maintain meaningful imaginative, reciprocal and sustainable relationships with our institutions and the government in and out of the classroom in a bid to foster student engagements, enable a free and independent student voice, contribute torwards educational journey whilst in institutions and promote success during studies and beyond."
    },
    {
      title: "Our Vision",
      content:
"Forever to remain the devoted revolutionary students' voice to the enrichment and enhancement of the educational processes and experience and welfare of students"
    },
  ];

  const team = [
        {
      name: "Nyasha Mutande",
      role: "Chairman",
      image: "https://via.placeholder.com/150", 
    },
      {
      name: "Trevor Ncube",
      role: "Secretary General (SG)",
      image: "https://via.placeholder.com/150", 
    },
    {
      name: "Enerst Ligoya",
      role: "Secretary for Recruitment and Ideology (SRI)",
      image: "https://via.placeholder.com/150", 
    },
       {
      name: "Sean Zihwi",
      role: "Secretary for Information and Publicity",
      image: "https://via.placeholder.com/150", 
    },
        {
      name: "Munashe Mudoti",
      role: "Cyber Security Director",
      image: "https://via.placeholder.com/150", 
    },
    {
      name: "Tsitsi Tauya",
      role: "Secretary for Gender and Health (SGH)",
      image: "https://via.placeholder.com/150", 
    },
 
    {
      name: "Rutendo",
      role: "Treasurer General (SGH)",
      image: "https://via.placeholder.com/150", 
    },
    {
      name: "Delight",
      role: "Secretary for Business and Ecconomic Affairs",
      image: "https://via.placeholder.com/150", 
    },
    {
      name: "Thelma",
      role: "Secretary for External Affairs",
      image: "https://via.placeholder.com/150", 
    },

    {
      name: "Tawana",
      role: "Secretary for Social Welfare",
      image: "https://via.placeholder.com/150", 
    },
    {
      name: "Naboth Nemaire",
      role: "Secreatary for Education",
      image: "https://via.placeholder.com/150", 
    },
    {
      name: "Hope Kashitiku",
      role: "Secreatary for Welfare of the Differently Abled Persons",
      image: "https://via.placeholder.com/150", 
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
