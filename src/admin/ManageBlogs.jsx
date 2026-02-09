import React, { useState } from "react";
import "./ManageBlogs.css";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const addBlog = (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      title,
      content,
      image: preview,
      date: new Date().toLocaleDateString(),
    };

    setBlogs([newBlog, ...blogs]);

    // Reset
    setTitle("");
    setContent("");
    setImage(null);
    setPreview(null);
  };

  const deleteBlog = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  return (
    <div className="manage-blogs">
      <h1>Manage Blogs</h1>
      <p>Create and manage blog posts displayed on the website.</p>

      {/* Create Blog */}
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

        <button type="submit">Add Blog</button>
      </form>

      {/* Blog List */}
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <span>{blog.date}</span>
              <p>{blog.content}</p>
              <button onClick={() => deleteBlog(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
