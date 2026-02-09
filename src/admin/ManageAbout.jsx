import React, { useState } from "react";
import "./ManageAbout.css";

export default function ManageAbout() {
  const [title, setTitle] = useState("Dr. A.M. Shareef");
  const [description, setDescription] = useState(
    "Dr. A.M. Shareef is a leader in dentistry, business networking, and community service."
  );
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    // TEMP: Replace with API call later
    console.log({
      title,
      description,
      image,
    });

    alert("About section updated successfully!");
  };

  return (
    <div className="manage-about">
      <h1>Manage About Section</h1>
      <p>Edit the About page content displayed on the website.</p>

      <form className="about-form" onSubmit={handleSave}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Profile Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
