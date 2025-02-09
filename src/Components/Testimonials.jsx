import React from "react";
import "../index.css";
import pfp from "../assets/pfp.svg";
import play from "../assets/play.svg";
import mic from "../assets/mic.svg";

const Testimonials = () => {
  return (
    <div
      style={{
        padding: "2rem",
        background: "#FFF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              background: "#916CE7",
              color: "#fff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            “
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Testimonials</h2>
        </div>

        <p
          style={{
            color: "#4B4B4B",
            lineHeight: "1.6",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          In a fast-growing and ever-changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like-minded people.
          Websites like hobbycue.com help me connect, communicate, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and services that I can avail of,
          which I can be assured is of great quality as it comes recommended by people of the hobbycue community.
          To have discussions, to get visibility, and to be able to safely explore various hobbies and activities
          in my city, all under one roof, is an excellent idea, and I highly recommend it.
        </p>

        <div
          style={{
            background: "#D6C4EC",
            padding: "1rem",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              background: "#fff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={play} alt="Play" style={{ width: "20px" }} />
          </div>
          <div style={{ flexGrow: 1, marginLeft: "1rem", height: "5px", background: "#fff", borderRadius: "5px", position: "relative" }}>
            <div style={{ width: "10%", height: "100%", background: "#916CE7", borderRadius: "5px" }}></div>
          </div>
          <span style={{ fontSize: "0.875rem", color: "#4B4B4B" }}>0:00</span>
          <img src={mic} alt="Mic" style={{ width: "20px", height: "20px" }} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <img
            src={pfp}
            alt="Shubha Nagarajan"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <div>
            <strong style={{ fontSize: "1rem", fontWeight: "700", color: "#916CE7" }}>Shubha Nagarajan</strong>
            <p style={{ fontSize: "0.875rem", color: "#007BFF" }}>Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
