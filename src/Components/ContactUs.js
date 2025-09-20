import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      Swal.fire("Oops!", "Please fill in all required fields.", "error");
      return;
    }

    Swal.fire("Success!", "Your message has been sent.", "success");

    // Reset form
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.description}>
          Have any questions or feedback? We'd love to hear from you. Fill in the
          form below and we'll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    padding: "20px",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "30px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  description: {
    marginBottom: "20px",
    fontSize: "14px",
    textAlign: "center",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
    resize: "none",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default ContactUs;
