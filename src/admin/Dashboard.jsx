// import React from "react";
// import "./Dashboard.css";

// export default function Dashboard() {
//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className="admin-sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li>Dashboard</li>
//           <li>Manage About</li>
//           <li>Manage Gallery</li>
//           <li>Manage Blogs</li>
//           <li>Logout</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="admin-content">
//         <h1>Welcome, Admin 👋</h1>
//         <p>Manage Dr. A.M. Shareef's website content here.</p>

//         <div className="stats">
//           <div className="stat-card">
//             <h3>About Section</h3>
//             <p>Edit biography & details</p>
//           </div>

//           <div className="stat-card">
//             <h3>Gallery</h3>
//             <p>Upload and manage images</p>
//           </div>

//           <div className="stat-card">
//             <h3>Blogs</h3>
//             <p>Create & manage blog posts</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }







// import React, { useEffect, useState } from "react";
// import "./Dashboard.css";

// export default function Dashboard() {

//   const [stats, setStats] = useState({
//     about: false,
//     galleryCount: 0,
//     blogCount: 0,
//     loading: true
//   });

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {

//         const [aboutRes, blogRes, galleryRes] = await Promise.all([
//           fetch("http://localhost:5000/api/about"),
//           fetch("http://localhost:5000/api/blogs"),
//           fetch("http://localhost:5000/api/gallery"),
//         ]);

//         const aboutData = await aboutRes.json();
//         const blogData = await blogRes.json();
//         const galleryData = await galleryRes.json();

//         setStats({
//           about: aboutData ? true : false,
//           blogCount: blogData.length || 0,
//           galleryCount: galleryData.length || 0,
//           loading: false
//         });

//       } catch (error) {
//         console.error("Dashboard API error:", error);
//         setStats(prev => ({ ...prev, loading: false }));
//       }
//     };

//     fetchDashboard();
//   }, []);

//   return (
//     <div className="admin-dashboard">

//       {/* Sidebar */}
//       <aside className="admin-sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li>Dashboard</li>
//           <li>Manage About</li>
//           <li>Manage Gallery</li>
//           <li>Manage Blogs</li>
//           <li>Logout</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="admin-content">
//         <h1>Welcome, Admin 👋</h1>
//         <p>Manage Dr. A.M. Shareef's website content here.</p>

//         {stats.loading ? (
//           <p>Loading dashboard...</p>
//         ) : (
//           <div className="stats">

//             {/* ABOUT */}
//             <div className="stat-card">
//               <h3>About Section</h3>
//               <p>
//                 {stats.about
//                   ? "Biography available"
//                   : "No about content added"}
//               </p>
//             </div>

//             {/* GALLERY */}
//             <div className="stat-card">
//               <h3>Gallery</h3>
//               <p>{stats.galleryCount} Images Uploaded</p>
//             </div>

//             {/* BLOGS */}
//             <div className="stat-card">
//               <h3>Blogs</h3>
//               <p>{stats.blogCount} Blog Posts</p>
//             </div>

//           </div>
//         )}
//       </main>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import ManageAbout from "./ManageAbout";
import ManageGallery from "./ManageGallery";
import ManageBlogs from "./ManageBlogs";

export default function Dashboard() {

  const [activePage, setActivePage] = useState("dashboard");

  const [stats, setStats] = useState({
    about: false,
    galleryCount: 0,
    blogCount: 0,
    loading: true
  });

  /* ===============================
     FETCH DASHBOARD DATA
  =============================== */

  useEffect(() => {

    if (activePage !== "dashboard") return;

    const fetchDashboard = async () => {
      try {

        const [aboutRes, blogRes, galleryRes] = await Promise.all([
          fetch("http://localhost:5000/api/about"),
          fetch("http://localhost:5000/api/blogs"),
          fetch("http://localhost:5000/api/gallery"),
        ]);

        const aboutData = await aboutRes.json();
        const blogData = await blogRes.json();
        const galleryData = await galleryRes.json();

        setStats({
          about: aboutData ? true : false,
          blogCount: blogData.length || 0,
          galleryCount: galleryData.length || 0,
          loading: false
        });

      } catch (error) {
        console.error("Dashboard API error:", error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchDashboard();

  }, [activePage]);

  /* ===============================
     PAGE RENDERER
  =============================== */

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <ManageAbout />;
      case "gallery":
        return <ManageGallery />;
      case "blogs":
        return <ManageBlogs />;
      default:
        return (
          <>
            <h1>Welcome, Admin 👋</h1>
            <p>Manage Dr. A.M. Shareef's website content here.</p>

            {stats.loading ? (
              <p>Loading dashboard...</p>
            ) : (
              <div className="stats">

                <div className="stat-card">
                  <h3>About Section</h3>
                  <p>{stats.about ? "Biography available" : "No about content added"}</p>
                </div>

                <div className="stat-card">
                  <h3>Gallery</h3>
                  <p>{stats.galleryCount} Images Uploaded</p>
                </div>

                <div className="stat-card">
                  <h3>Blogs</h3>
                  <p>{stats.blogCount} Blog Posts</p>
                </div>

              </div>
            )}
          </>
        );
    }
  };

  /* ===============================
     LOGOUT
  =============================== */

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>

        <ul>
          <li onClick={() => setActivePage("dashboard")}>Dashboard</li>
          <li onClick={() => setActivePage("about")}>Manage About</li>
          <li onClick={() => setActivePage("gallery")}>Manage Gallery</li>
          <li onClick={() => setActivePage("blogs")}>Manage Blogs</li>
          <li className="logout" onClick={handleLogout}>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        {renderPage()}
      </main>

    </div>
  );
}
