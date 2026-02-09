import React from "react";
import "./Footer.css";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Dr. A M Shareef</h3>
          <p>
            Dental Surgeon • Community Advocate • BNI Executive Director
          </p>
        </div>

        {/* Links */}
        <ul className="footer-links">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("blogs")}>Blogs</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Dr. A M Shareef. All Rights Reserved.
      </div>
    </footer>
  );
}
