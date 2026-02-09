import React from "react";
import "./Blogs.css";
import blog from "../assets/blog.webp"
import blog1 from "../assets/blog1.webp"
import blog2 from "../assets/blog2.webp"
import blog3 from "../assets/blog3.webp"
export default function Blogs() {
  const blogs = [
    {
      title: "Importance of Oral Health",
      image: blog,
      content:
        "Dr. A.M. Shareef is committed to integrating the latest innovations in dental care into his practice. By utilizing advanced technologies such as digital imaging and laser dentistry, he enhances patient experiences and outcomes. His focus on continuous improvement ensures that TANZA Dental remains at the forefront of dental advancements, providing patients with the best possible care."
    },
    {
      title: "Leadership Through Dentistry",
      image: blog1,
      content:
        "Dr. A.M. Shareef is committed to integrating the latest innovations in dental care into his practice. By utilizing advanced technologies such as digital imaging and laser dentistry, he enhances patient experiences and outcomes. His focus on continuous improvement ensures that TANZA Dental remains at the forefront of dental advancements, providing patients with the best possible care."
    },
    {
      title: "Community Development & BNI",
      image: blog2,
      content:
        "Dr. A.M. Shareef believes in giving back to the community. Through various outreach programs, he educates the public about dental health and wellness. His initiatives include free dental check-ups and workshops aimed at promoting oral hygiene, especially in underserved communities. Dr. Shareef's dedication to community service reflects his commitment to improving public health"
    },
    {
      title: "Technology in Modern Dental Care",
      image: blog3,
      content:
        "In today's interconnected world, networking is crucial for professional growth. Dr. A.M. Shareef actively participates in dental associations and conferences, sharing knowledge and learning from peers. His networking efforts not only enhance his practice but also contribute to the broader dental community, fostering collaboration and innovation."
    }
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-title">Blogs & <span className="blog-sub">Insights</span></h2>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...blogs, ...blogs].map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
