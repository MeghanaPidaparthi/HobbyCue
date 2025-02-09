import React, { useState } from "react";
import "../index.css";
import PeopleIcon from "../assets/People.svg";
import PlaceIcon from "../assets/Place.svg";
import ProductIcon from "../assets/Product.svg";
import ProgramIcon from "../assets/Program.svg";

const features = [
  {
    icon: PeopleIcon,
    title: "People",
    description:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.",
    buttonText: "Connect",
    bgColor: "#8064A2",
  },
  {
    icon: PlaceIcon,
    title: "Place",
    description:
      "Find a class, school, playground, auditorium, studio, shop, or event venue. Book a slot at venues that allow booking through hobbycue.",
    buttonText: "Meet up",
    bgColor: "#77933C",
  },
  {
    icon: ProductIcon,
    title: "Product",
    description:
      "Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or community members.",
    buttonText: "Get it",
    bgColor: "#C0504D",
  },
  {
    icon: ProgramIcon,
    title: "Program",
    description:
      "Find events, meetups, and workshops related to your hobby. Register or buy tickets online.",
    buttonText: "Attend",
    bgColor: "#0096C8",
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {/* Internal CSS for responsiveness */}
      <style>
        {`
          .features-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 2rem;
            max-width: 1200px;
            margin: auto;
          }

          @media (max-width: 768px) {
            .features-container {
              grid-template-columns: 1fr;
            }
          }

          .feature-box {
            border: 1px solid #E0E0E0;
            padding: 1.75rem;
            border-radius: 1rem;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
            background: white;
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .feature-box:hover {
            color: white;
          }

          .feature-button {
            border: 1px solid #916CE7;
            color: #916CE7;
            padding: 0.6rem 1.2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            background: transparent;
            transition: background 0.2s, color 0.2s;
            cursor: pointer;
            align-self: start;
          }

          .feature-box:hover .feature-button {
            border-color: white;
            background: white;
            color: black;
          }
        `}
      </style>

      <div className="features-container">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-box"
            style={{ background: hoveredIndex === index ? feature.bgColor : "#fff" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <img
                src={feature.icon}
                alt={feature.title}
                style={{
                  width: "30px",
                  height: "30px",
                  filter: hoveredIndex === index ? "brightness(0) invert(1)" : "none",
                }}
              />
              <h2 style={{ fontSize: "1.2rem", fontWeight: "700" }}>{feature.title}</h2>
            </div>
            <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: hoveredIndex === index ? "#fff" : "#4B4B4B" }}>
              {feature.description}
            </p>
            <button className="feature-button">{feature.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
