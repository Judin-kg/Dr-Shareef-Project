




// import React, { useEffect, useState } from "react";
// import "./Dashboard.css";

// import ManageAbout from "./ManageAbout";
// import ManageGallery from "./ManageGallery";
// import ManageBlogs from "./ManageBlogs";
// import ManageVideo from "./ManageVideo";

// export default function Dashboard() {

//   const [activePage, setActivePage] = useState("dashboard");

//   const [stats, setStats] = useState({
//     about: false,
//     galleryCount: 0,
//     blogCount: 0,
//     loading: true
//   });

//   /* ===============================
//      FETCH DASHBOARD DATA
//   =============================== */

//   useEffect(() => {

//     if (activePage !== "dashboard") return;

//     const fetchDashboard = async () => {
//       try {

//         const [aboutRes, blogRes, galleryRes] = await Promise.all([
//           fetch("https://dr-shareef-server.vercel.app/api/about"),
//           fetch("https://dr-shareef-server.vercel.app/api/blogs"),
//           fetch("https://dr-shareef-server.vercel.app/api/gallery"),
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

//   }, [activePage]);

//   /* ===============================
//      PAGE RENDERER
//   =============================== */

//   const renderPage = () => {
//     switch (activePage) {
//       case "about":
//         return <ManageAbout />;
//       case "gallery":
//         return <ManageGallery />;
//       case "blogs":
//         return <ManageBlogs />;
//         case "vedio":
//         return <ManageVideo />;
//       default:
//         return (
//           <>
//             <h1>Welcome, Admin 👋</h1>
//             <p>Manage Dr. A.M. Shareef's website content here.</p>

//             {stats.loading ? (
//               <p>Loading dashboard...</p>
//             ) : (
//               <div className="stats">

//                 <div className="stat-card">
//                   <h3>About Section</h3>
//                   <p>{stats.about ? "Biography available" : "No about content added"}</p>
//                 </div>

//                 <div className="stat-card">
//                   <h3>Gallery</h3>
//                   <p>{stats.galleryCount} Images Uploaded</p>
//                 </div>

//                 <div className="stat-card">
//                   <h3>Blogs</h3>
//                   <p>{stats.blogCount} Blog Posts</p>
//                 </div>

//               </div>
//             )}
//           </>
//         );
//     }
//   };

//   /* ===============================
//      LOGOUT
//   =============================== */

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     window.location.href = "/admin-login";
//   };

//   return (
//     <div className="admin-dashboard">

//       {/* Sidebar */}
//       <aside className="admin-sidebar">
//         <h2>Admin Panel</h2>

//         <ul>
//           <li onClick={() => setActivePage("dashboard")}>Dashboard</li>
//           <li onClick={() => setActivePage("about")}>Manage About</li>
//           <li onClick={() => setActivePage("gallery")}>Manage Gallery</li>
//           <li onClick={() => setActivePage("blogs")}>Manage Blogs</li>
//           <li className="logout" onClick={handleLogout}>Logout</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="admin-content">
//         {renderPage()}
//       </main>

//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import ManageAbout from "./ManageAbout";
import ManageGallery from "./ManageGallery";
import ManageBlogs from "./ManageBlogs";
import ManageVideo from "./ManageVideo";

export default function Dashboard() {

  const [activePage, setActivePage] = useState("dashboard");

  const [stats, setStats] = useState({
    about: false,
    galleryCount: 0,
    blogCount: 0,
    videoCount: 0,
    loading: true
  });

  /* ===============================
     FETCH DASHBOARD DATA
  =============================== */

  useEffect(() => {

    if (activePage !== "dashboard") return;

    const fetchDashboard = async () => {
      try {

        const [aboutRes, blogRes, galleryRes, videoRes] = await Promise.all([
          fetch("https://dr-shareef-server.vercel.app/api/about"),
          fetch("https://dr-shareef-server.vercel.app/api/blogs"),
          fetch("https://dr-shareef-server.vercel.app/api/gallery"),
          fetch("https://dr-shareef-server.vercel.app/api/videos"),
        ]);

        const aboutData = await aboutRes.json();
        const blogData = await blogRes.json();
        const galleryData = await galleryRes.json();
        const videoData = await videoRes.json();

        setStats({
          about: aboutData ? true : false,
          blogCount: blogData.length || 0,
          galleryCount: galleryData.length || 0,
          videoCount: videoData.length || 0,
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
      case "video":
        return <ManageVideo />;
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
                  <p>
                    {stats.about
                      ? "Biography available"
                      : "No about content added"}
                  </p>
                </div>

                <div className="stat-card">
                  <h3>Gallery</h3>
                  <p>{stats.galleryCount} Images Uploaded</p>
                </div>

                <div className="stat-card">
                  <h3>Blogs</h3>
                  <p>{stats.blogCount} Blog Posts</p>
                </div>

                <div className="stat-card">
                  <h3>Videos</h3>
                  <p>{stats.videoCount} Videos Uploaded</p>
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
          <li
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={activePage === "about" ? "active" : ""}
            onClick={() => setActivePage("about")}
          >
            Manage About
          </li>

          <li
            className={activePage === "gallery" ? "active" : ""}
            onClick={() => setActivePage("gallery")}
          >
            Manage Gallery
          </li>

          <li
            className={activePage === "blogs" ? "active" : ""}
            onClick={() => setActivePage("blogs")}
          >
            Manage Blogs
          </li>

          <li
            className={activePage === "video" ? "active" : ""}
            onClick={() => setActivePage("video")}
          >
            Manage Videos
          </li>

          <li className="logout" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        {renderPage()}
      </main>

    </div>
  );
}

