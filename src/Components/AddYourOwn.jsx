import React from "react";
import "../index.css";

const AddYourOwn = () => {
  return (
    <div
      style={{
        padding: "2rem",
        background: "#F7FDFF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "1.5rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            background: "#009FDA",
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
          +
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            Add Your Own
          </h2>
          <p style={{ color: "#4B4B4B", lineHeight: "1.6", marginBottom: "1rem" }}>
            Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on hobbycue? Go ahead and Add your Own page.
          </p>
          <button
            style={{
              border: "1px solid #916CE7",
              color: "#916CE7",
              padding: "0.6rem 1.2rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              background: "transparent",
              transition: "background-color 0.2s, color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#916CE7";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#916CE7";
            }}
          >
            Add new
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwn;
