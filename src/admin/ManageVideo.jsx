// import React, { useState } from "react";
// import axios from "axios";

// export default function ManageVideo() {
//   const [title, setTitle] = useState("");
//   const [video, setVideo] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("video", video);

//     try {
//       await axios.post("http://localhost:5000/api/videos/add", formData);
//       alert("Video Uploaded Successfully!");
//       setTitle("");
//       setVideo(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Manage Videos</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Video Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <br /><br />

//         <input
//           type="file"
//           accept="video/*"
//           onChange={(e) => setVideo(e.target.files[0])}
//           required
//         />
//         <br /><br />

//         <button type="submit">Upload Video</button>
//       </form>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";

export default function ManageVideo() {
  const [title, setTitle]= useState("");
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  // ✅ Fetch videos from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) return alert("Please select a video");

    try {
      setLoading(true);

      const data = new FormData();
      data.append("file", video);
      data.append("upload_preset", uploadPreset);

      // ✅ Upload to Cloudinary
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      console.log(res,"responseeeeeeeeeeeeee"); 
      

      const result = await res.json();


      console.log(result,"resulttttttttttttt");
      




      // ✅ Save to backend
      const backendRes = await fetch(
        "http://localhost:5000/api/videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            video: result.secure_url,
          }),
        }
      );
     
     console.log(backendRes,"baaaaaaackendres");
     

      const newVideo = await backendRes.json();

      console.log(newVideo,"neeeeewvedio");
      

      setVideos([newVideo, ...videos]);

      alert("Video Uploaded Successfully!");

      setTitle("");
      setVideo(null);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await fetch(
      `http://localhost:5000/api/videos/${id}`,
      {
        method: "DELETE",
      }
    );

    setVideos(videos.filter((vid) => vid._id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Upload Video</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          required
        />
        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </form>

      <hr style={{ margin: "40px 0" }} />

      <h3>All Videos</h3>

      {videos.map((vid) => (
        <div key={vid._id} style={{ marginBottom: "30px" }}>
          <h4>{vid.title}</h4>
          <video
            src={vid.video}
            controls
            width="400"
            style={{ borderRadius: "10px" }}
          />
          <br />
          <button onClick={() => handleDelete(vid._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

