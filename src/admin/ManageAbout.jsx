// import React, { useState } from "react";
// import "./ManageAbout.css";

// export default function ManageAbout() {
//   const [title, setTitle] = useState("Dr. A.M. Shareef");
//   const [description, setDescription] = useState(
//     "Dr. A.M. Shareef is a leader in dentistry, business networking, and community service."
//   );
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSave = (e) => {
//     e.preventDefault();

//     // TEMP: Replace with API call later
//     console.log({
//       title,
//       description,
//       image,
//     });

//     alert("About section updated successfully!");
//   };

//   return (
//     <div className="manage-about">
//       <h1>Manage About Section</h1>
//       <p>Edit the About page content displayed on the website.</p>

//       <form className="about-form" onSubmit={handleSave}>
//         <label>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Description</label>
//         <textarea
//           rows="6"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <label>Profile Image</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} />

//         {preview && (
//           <div className="image-preview">
//             <img src={preview} alt="Preview" />
//           </div>
//         )}

//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./ManageAbout.css";

export default function ManageAbout() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Cloudinary Config
  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  // ✅ Fetch existing About data
  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTitle(data.title || "");
          setDescription(data.description || "");
          setPreview(data.image || null);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ Handle Save
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let imageUrl = preview;

      // Upload to Cloudinary if new image selected
      if (image) {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", uploadPreset);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: data,
          }
        );

        const result = await res.json();
        imageUrl = result.secure_url;
      }

      // Save to backend
      await fetch("http://localhost:5000/api/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image: imageUrl,
        }),
      });

      setMessage("✅ About section updated successfully!");
    } catch (error) {
      console.log(error);
      setMessage("❌ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="manage-about">
      <h1>Manage About Section</h1>
      <p>Edit the About page content displayed on the website.</p>

      {message && <div className="message">{message}</div>}

      <form className="about-form" onSubmit={handleSave}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Profile Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
