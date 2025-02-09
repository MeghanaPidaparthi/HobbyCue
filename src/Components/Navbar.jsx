import React, { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExplore = () => setIsExploreOpen(!isExploreOpen);
  const toggleHobbies = () => setIsHobbiesOpen(!isHobbiesOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navbarStyles = {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  };

  const mobileMenuStyles = {
    display: isMobileMenuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: "0",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyles}>
      <a href="#" style={{ display: "flex", alignItems: "center", color: "#8064A2", textDecoration: "none" }}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "0.5rem" }} />
      </a>

      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f2f2f2", borderRadius: "5px", padding: "0.5rem", flex: 1, maxWidth: "400px", marginLeft: "2rem" }}>
          <input type="text" placeholder="Search here..." style={{ border: "none", background: "none", outline: "none", width: "100%", padding: "0.5rem", fontSize: "1rem" }} />
          <FiSearch style={{ color: "#8064A2", fontSize: "1.25rem", cursor: "pointer" }} />
        </div>
      )}

      {isMobile ? (
        <FiMenu onClick={toggleMobileMenu} style={{ fontSize: "1.5rem", cursor: "pointer" }} />
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div onClick={toggleExplore} style={{ cursor: "pointer" }}>
            <FiUser /> Explore <FiChevronDown />
            {isExploreOpen && (
              <div style={{ position: "absolute", backgroundColor: "#fff", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "0.5rem 1rem", minWidth: "180px", zIndex: 1000 }}>
                <p>People - Community</p>
                <p>Places - Venues</p>
                <p>Programs - Events</p>
                <p>Products - Store</p>
                <p>Blogs</p>
              </div>
            )}
          </div>

          <div onClick={toggleHobbies} style={{ cursor: "pointer" }}>
            <FiBell /> Hobbies <FiChevronDown />
            {isHobbiesOpen && (
              <div style={{ position: "absolute", backgroundColor: "#fff", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", padding: "0.5rem 1rem", minWidth: "180px", zIndex: 1000 }}>
                <p>Art & Craft</p>
                <p>Music</p>
                <p>Sports</p>
                <p>Photography</p>
                <p>Cooking</p>
              </div>
            )}
          </div>

          <FiShoppingCart style={{ color: "#8064A2", fontSize: "1.25rem", cursor: "pointer" }} />
          <button style={{ backgroundColor: "transparent", color: "#8064A2", border: "2px solid #8064A2", padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>Sign In</button>
        </div>
      )}

      {isMobile && (
        <div style={mobileMenuStyles}>
          <div onClick={toggleExplore} style={{ cursor: "pointer", padding: "0.5rem 0" }}>
            Explore <FiChevronDown />
            {isExploreOpen && (
              <div>
                <p>People - Community</p>
                <p>Places - Venues</p>
                <p>Programs - Events</p>
                <p>Products - Store</p>
                <p>Blogs</p>
              </div>
            )}
          </div>
          <div onClick={toggleHobbies} style={{ cursor: "pointer", padding: "0.5rem 0" }}>
            Hobbies <FiChevronDown />
            {isHobbiesOpen && (
              <div>
                <p>Art & Craft</p>
                <p>Music</p>
                <p>Sports</p>
                <p>Photography</p>
                <p>Cooking</p>
              </div>
            )}
          </div>
          <button style={{ backgroundColor: "#8064A2", color: "#fff", padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>Sign In</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
