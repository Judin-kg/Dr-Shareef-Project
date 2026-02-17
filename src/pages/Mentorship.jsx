import React, { useEffect, useRef } from "react";
import "../pages/Mentorship.css";
import mentorImg from "../assets/img3.webp"; // replace with your image

export default function Mentorship() {
  const contentRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      contentRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mentorship-section">
      <div className="mentorship-overlay"></div>

      <div className="mentorship-wrapper">

        {/* LEFT CONTENT */}
        <div className="mentorship-content">
          <h2
            ref={(el) => (contentRefs.current[0] = el)}
            className="mentorship-title reveal"
          >
            Mentorship <span className="side-title">& Community Impact</span>
          </h2>

          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="mentorship-block reveal"
          >
            <h3>Philanthropy with Purpose</h3>
            <p>
              As Chairman of the Gratitude Foundation, Dr. Shareef's
              initiatives focus on supporting disadvantaged individuals,
              offering them resources, education, and sustainable income
              opportunities.
            </p>
          </div>

          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className="mentorship-block reveal"
          >
            <h3>Empowering Communities through Income Generation</h3>
            <p>
              The Gratitude Foundation’s vocational training and skill
              development programs have helped individuals secure stable
              livelihoods, empowering them to live with dignity and independence.
            </p>
          </div>

          <div
            ref={(el) => (contentRefs.current[3] = el)}
            className="mentorship-block reveal"
          >
            <h3>Supporting Entrepreneurs through BNI</h3>
            <p>
              Through BNI, Dr. Shareef mentors entrepreneurs, helping them
              expand their networks, build sustainable businesses, and
              create meaningful economic growth within their communities.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mentorship-image">
          <img src={mentorImg} alt="Mentorship" />
        </div>

      </div>
    </section>
  );
}
