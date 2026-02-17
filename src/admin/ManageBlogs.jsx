import React, { useState, useEffect } from "react";
import "./ManageBlogs.css";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Cloudinary config
  const cloudName = "djuihd2af";
  const uploadPreset = "rjatlas";

  // ✅ Fetch blogs
  useEffect(() => {
    fetch("https://dr-shareef-server.vercel.app/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const addBlog = async (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // ✅ Upload to Cloudinary
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

      // ✅ Save blog in backend
      const blogRes = await fetch("https://dr-shareef-server.vercel.app/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image: result.secure_url,
        }),
      });

      const newBlog = await blogRes.json();

      setBlogs([newBlog, ...blogs]);

      // Reset
      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const deleteBlog = async (id) => {
    await fetch(`https://dr-shareef-server.vercel.app/api/blogs/${id}`, {
      method: "DELETE",
    });

    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <div className="manage-blogs">
      <h1>Manage Blogs</h1>
      <p>Create and manage blog posts displayed on the website.</p>

      <form className="blog-form" onSubmit={addBlog}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="5"
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <div className="blog-image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </form>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <span>
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <p>{blog.content}</p>
              <button onClick={() => deleteBlog(blog._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
