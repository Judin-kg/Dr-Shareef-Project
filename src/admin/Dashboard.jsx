import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage About</li>
          <li>Manage Gallery</li>
          <li>Manage Blogs</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <h1>Welcome, Admin 👋</h1>
        <p>Manage Dr. A.M. Shareef's website content here.</p>

        <div className="stats">
          <div className="stat-card">
            <h3>About Section</h3>
            <p>Edit biography & details</p>
          </div>

          <div className="stat-card">
            <h3>Gallery</h3>
            <p>Upload and manage images</p>
          </div>

          <div className="stat-card">
            <h3>Blogs</h3>
            <p>Create & manage blog posts</p>
          </div>
        </div>
      </main>
    </div>
  );
}
