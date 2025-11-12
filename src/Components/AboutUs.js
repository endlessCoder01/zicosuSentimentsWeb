import React from "react";
import Trevor from "../Assets/theTeam/Trevor.png";
import Rutendo from "../Assets/theTeam/Rutendo.png";
import Hope from "../Assets/theTeam/Hope.png";
import Naboth from "../Assets/theTeam/Naboth.png";
import Tsitsi from "../Assets/theTeam/Tsitsi.png";
import Sean from "../Assets/theTeam/Sean.png";
import Delight from "../Assets/theTeam/Delight.png";
import Tawana from "../Assets/theTeam/Tawana.png";
import Ernest from "../Assets/theTeam/Ernest.png";
import Nyasha from "../Assets/theTeam/Nyasha.png";
import Thelma from "../Assets/theTeam/Thelma.png";
import Munashe from "../Assets/theTeam/Munashe.png";

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
        "We aim to develop and maintain meaningful imaginative, reciprocal and sustainable relationships with our institutions and the government in and out of the classroom in a bid to foster student engagements, enable a free and independent student voice, contribute torwards educational journey whilst in institutions and promote success during studies and beyond.",
    },
    {
      title: "Our Vision",
      content:
        "Forever to remain the devoted revolutionary students' voice to the enrichment and enhancement of the educational processes and experience and welfare of students",
    },
  ];

  const team = [
    { name: "Nyasha Mutande", role: "Chairman", image: Nyasha },
    { name: "Trevor Ncube", role: "Secretary General (SG)", image: Trevor },
    {
      name: "Enerst Ligoya",
      role: "Secretary for Recruitment and Ideology (SRI)",
      image: Ernest,
    },
    {
      name: "Sean Zihwi",
      role: "Secretary for Information and Publicity",
      image: Sean,
    },
    { name: "Munashe Mudoti", role: "Cyber Security Director", image: Munashe },
    {
      name: "Tsitsi Tauya",
      role: "Secretary for Gender and Health (SGH)",
      image: Tsitsi,
    },
    { name: "Rutendo Mahachi", role: "Treasurer General (TG)", image: Rutendo },
    {
      name: "Delight Kativhu",
      role: "Secretary for Business and Ecconomic Affairs",
      image: Delight,
    },
    { name: "Thelma", role: "Secretary for External Affairs", image: Thelma },
    {
      name: "Tawana Mangani",
      role: "Secretary for Social Welfare",
      image: Tawana,
    },
    { name: "Naboth Nemaire", role: "Secreatary for Education", image: Naboth },
    {
      name: "Hope Kashitiku",
      role: "Secreatary for Welfare of the Differently Abled Persons",
      image: Hope,
    },
  ];

  return (
    <div className="screen-container">
      <div style={styles.page}>
        <h1 style={styles.header}>About Us</h1>
        <p style={styles.subheader}>
          Learn more about our story, our values, and the team behind our
          mission.
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
                style={{
                  ...styles.teamImage,
                  imageRendering: "auto", // ensures smooth scaling
                  transform: "translateZ(0)", // improves rendering on high DPI
                  backfaceVisibility: "hidden",
                }}
                loading="lazy" // optional: improves performance
              />
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inline styles (unchanged, only teamImage modified for sharpness)
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
    width: "120px", // slightly larger for clarity
    height: "120px", // matches original shape
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
