import React from "react";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import pinterestIcon from "../assets/pinterest.svg";
import googleIcon from "../assets/google.svg";
import youtubeIcon from "../assets/youtube.svg";
import telegramIcon from "../assets/telegram.svg";
import emailIcon from "../assets/email.svg";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1: Hobbycue */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Hobbycue</h3>
          <p style={styles.link}>About Us</p>
          <p style={styles.link}>Our Services</p>
          <p style={styles.link}>Work with Us</p>
          <p style={styles.link}>FAQ</p>
          <p style={styles.link}>Contact Us</p>
        </div>

        {/* Column 2: How Do I */}
        <div style={styles.column}>
          <h3 style={styles.heading}>How Do I</h3>
          <p style={styles.link}>Sign Up</p>
          <p style={styles.link}>Add a Listing</p>
          <p style={styles.link}>Claim Listing</p>
          <p style={styles.link}>Post a Query</p>
          <p style={styles.link}>Add a Blog Post</p>
          <p style={styles.link}>Other Queries</p>
        </div>

        {/* Column 3: Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <p style={styles.link}>Listings</p>
          <p style={styles.link}>Blog Posts</p>
          <p style={styles.link}>Shop / Store</p>
          <p style={styles.link}>Community</p>
        </div>

        {/* Column 4: Social Media & Invite Friends */}
        <div style={styles.socialColumn}>
          <h3 style={styles.heading}>Social Media</h3>
          <div style={styles.socialIcons}>
            <img src={facebookIcon} alt="Facebook" style={styles.icon} />
            <img src={twitterIcon} alt="Twitter" style={styles.icon} />
            <img src={instagramIcon} alt="Instagram" style={styles.icon} />
            <img src={pinterestIcon} alt="Pinterest" style={styles.icon} />
            <img src={googleIcon} alt="Google" style={styles.icon} />
            <img src={youtubeIcon} alt="YouTube" style={styles.icon} />
            <img src={telegramIcon} alt="Telegram" style={styles.icon} />
            <img src={emailIcon} alt="Email" style={styles.icon} />
          </div>

          <h3 style={styles.heading}>Invite Friends</h3>
          <div style={styles.inviteContainer}>
            <input type="email" placeholder="Email ID" style={styles.input} />
            <button style={styles.inviteButton}>Invite</button>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        © Purple Cues Private Limited
      </div>
    </footer>
  );
};

// Inline CSS Styles
const styles = {
  footer: {
    backgroundColor: "#FFFFFF",
    padding: "3rem 2rem",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: {
    flex: "1",
    minWidth: "150px",
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  link: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "0.5rem",
    cursor: "pointer",
  },
  socialColumn: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "1rem",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginBottom: "1rem",
  },
  icon: {
    width: "32px",
    height: "32px",
    cursor: "pointer",
  },
  inviteContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "1rem",
  },
  input: {
    flex: "1",
    padding: "0.5rem",
    border: "1px solid #8064A2",
    borderRadius: "4px",
  },
  inviteButton: {
    backgroundColor: "#8064A2",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  copyright: {
    textAlign: "center",
    marginTop: "2rem",
    paddingTop: "1rem",
    borderTop: "1px solid #EEE",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default Footer;
