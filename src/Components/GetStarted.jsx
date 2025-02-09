import React from "react";
import getStarted from "../assets/GetStarted.svg";

const GetStarted = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>
        Your <span style={styles.italic}>Hobby</span>, Your{" "}
        <span style={styles.blueText}>Community...</span>
      </h1>
      <button style={styles.button}>
        Get Started
      </button>
      <div style={styles.illustrations}>
        <img src={getStarted} alt="Hobbies" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor: "#F7FDFF", // Updated background color
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#000",
  },
  italic: {
    fontStyle: "italic",
    color: "#8064A2",
  },
  blueText: {
    color: "#0096C8",
  },
  button: {
    marginTop: "1.5rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#8064A2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  buttonImage: {
    height: "24px",
  },
  illustrations: {
    marginTop: "2rem",
  },
  image: {
    width: "100%",
    maxWidth: "900px",
  },
};

export default GetStarted;
