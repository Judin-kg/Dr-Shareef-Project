


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// // import Dashboard from "./admin/Dashboard";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* Admin */}
//         {/* <Route path="/admin" element={<Dashboard />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }











// import React from "react";



// // Sections

// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Navabar from "./pages/Navabar";
// import Footer from "./pages/Footer";

// function App() {
//   return (
//     <>
//       <Navabar />

//       {/* Offset for fixed navbar */}
//       <div style={{ paddingTop: "80px" }}>
//         <section id="home">
//           <Home />
//         </section>

//         <section id="about">
//           <About />
//         </section>

//         <section id="gallery">
//           <Gallery />
//         </section>

//         <section id="blogs">
//           <Blogs />
//         </section>

//         <section id="contact">
//           <Contact />
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;




import React, { useState } from "react";

// Public components

import Footer from "./components/Footer";

// Public pages (SPA sections)
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

// Admin
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import Navabar from "./components/Navabar";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* ---------------- ADMIN VIEW ---------------- */
  if (isAdmin) {
    return isLoggedIn ? (
      <Dashboard />
    ) : (
      <AdminLogin onLogin={() => setIsLoggedIn(true)} />
    );
  }

  /* ---------------- PUBLIC SPA VIEW ---------------- */
  return (
    <>
      <Navabar />

      <main style={{ paddingTop: "80px" }}>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="blogs">
          <Blogs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Temporary admin access button (remove in production) */}
      <button
        onClick={() => setIsAdmin(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#d4af37",
          color: "#000",
          border: "none",
          padding: "10px 16px",
          borderRadius: "6px",
          fontWeight: "600",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        Admin
      </button>
    </>
  );
}

export default App;
