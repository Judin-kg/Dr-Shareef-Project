import React, { useState, useEffect } from "react";
import "./ManageGallery.css";

export default function ManageGallery() {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Cloudinary config
  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  // ✅ Fetch gallery images
  useEffect(() => {
    fetch("https://dr-shareef-server.vercel.app/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    setLoading(true);

    try {
      // ✅ Upload to Cloudinary
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      // ✅ Save to backend
      const galleryRes = await fetch("https://dr-shareef-server.vercel.app/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: result.secure_url,
        }),
      });

      const newImage = await galleryRes.json();

      setImages([newImage, ...images]);

      // Reset
      setImageFile(null);
      setPreview(null);
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    await fetch(`https://dr-shareef-server.vercel.app/api/gallery/${id}`, {
      method: "DELETE",
    });

    setImages(images.filter((img) => img._id !== id));
  };

  return (
    <div className="manage-gallery">
      <h1>Manage Gallery</h1>
      <p>Upload and manage gallery images.</p>

      <form className="gallery-form" onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <div className="preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>

      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img._id} className="gallery-card">
            <img src={img.image} alt="Gallery" />
            <button onClick={() => handleDelete(img._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
