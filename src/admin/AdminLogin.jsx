import React, { useState } from "react";
import "./AdminLogin.css";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP login logic (replace with backend later)
    if (email === "admin@shareef.com" && password === "admin123") {
      setError("");
      onLogin(true);
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login">
      <div className="login-card">
        <h2>Admin Login</h2>
        <p>Dr. A.M. Shareef – Admin Panel</p>

        {error && <span className="error">{error}</span>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-100"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
          className="w-100"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button  type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
