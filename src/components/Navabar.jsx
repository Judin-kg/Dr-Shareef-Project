


// import React, { useState } from "react";
// import "./Navabar.css";

// export default function Navabar() {
//   const [open, setOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     section.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         <div className="logo" onClick={() => scrollToSection("home")}>
//           Dr. A M Shareef
//         </div>

//         <ul className={`nav-links ${open ? "open" : ""}`}>
//           <li onClick={() => scrollToSection("home")}>Home</li>
//           <li onClick={() => scrollToSection("about")}>About</li>
//           <li onClick={() => scrollToSection("gallery")}>Gallery</li>
//           <li onClick={() => scrollToSection("blogs")}>Blogs</li>
//           <li onClick={() => scrollToSection("contact")}>Contact</li>
//         </ul>

//         <div className="menu-toggle" onClick={() => setOpen(!open)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//       </div>
//     </nav>
//   );
// }







// import React, { useState, useEffect } from "react";
// import "./Navabar.css";

// export default function Navabar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     section.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">
//         <div className="logo" onClick={() => scrollToSection("home")}>
//           Dr. A M Shareef
//         </div>

//         <ul className={`nav-links ${open ? "open" : ""}`}>
//           <li onClick={() => scrollToSection("home")}>Home</li>
//           <li onClick={() => scrollToSection("about")}>About</li>
//           <li onClick={() => scrollToSection("gallery")}>Gallery</li>
//           <li onClick={() => scrollToSection("blogs")}>Blogs</li>
//           <li onClick={() => scrollToSection("contact")}>Contact</li>
//         </ul>

//         <div className="menu-toggle" onClick={() => setOpen(!open)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// }



import React, { useState, useEffect } from "react";
import "./Navabar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-container ${scrolled ? "shrink" : ""}`}>
        <div className="logo" onClick={() => scrollToSection("home")}>
          Dr. A M Shareef
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("blogs")}>Blogs</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
