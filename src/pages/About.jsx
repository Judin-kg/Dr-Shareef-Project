// import React, { useEffect, useRef } from "react";
// import "../pages/About.css";

// export default function About() {
//   const imageRef = useRef(null);

//   // Scroll-based image reveal
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!imageRef.current) return;

//       const rect = imageRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight - 100) {
//         imageRef.current.classList.add("img-reveal");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="about-section">
//       <div className="about-wrapper">

//         {/* Text Section */}
//         <div className="about-text">

//           <h2 className="about-title typing-effect">
//             About Dr. A M Shareef
//           </h2>

//           <p className="about-para fade-in">
//             Dr. A.M. Shareef is a leader in dentistry, business networking,
//             and community service. His career reflects a deep commitment
//             to professional excellence, ethical practice, and meaningful
//             community development.
//           </p>

//           <div className="about-block fade-in delay">
//             <h3>Education & Early Career</h3>
//             <p>
//               Dr. Shareef’s journey began with a strong foundation in
//               dental science, where he developed exceptional clinical
//               skills and a patient-centric approach. From the early
//               stages of his career, he established himself as a
//               compassionate and skilled practitioner with a passion for
//               continuous learning and innovation in dental care.
//             </p>
//           </div>

//           <div className="about-block fade-in delay-2">
//             <h3>Chief Dental Surgeon – TANZA Dental</h3>
//             <p>
//               As the Chief Dental Surgeon at <strong>TANZA Dental</strong>,
//               Dr. Shareef has transformed the clinic into a trusted and
//               reputable practice. Under his leadership, TANZA Dental is
//               known for its cutting-edge treatments, state-of-the-art
//               technology, and highly personalized patient care, setting
//               new standards in modern dentistry.
//             </p>
//           </div>

//         </div>

//         {/* Image Section */}
//         <div className="about-image-container">
//           <img
//             ref={imageRef}
//             src="/images/about.jpg"
//             alt="Dr A M Shareef"
//             className="about-image"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from "react";
import "../pages/About.css";
import image from "../assets/Dr.PNG"
export default function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /* Reveal image */
      if (rect.top < windowHeight - 120) {
        imageRef.current.classList.add("img-reveal");
      }

      /* Futuristic scroll animation */
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );

      const scale = 1.25 - progress * 0.25; // zoom → normal
      const translateY = 40 - progress * 40;

      imageRef.current.style.transform = `
        scale(${scale}) translateY(${translateY}px)
      `;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        {/* TEXT */}
        <div className="about-text">
          <h2 className="about-title typing-effect">
            About  <span className="title-title">Dr.</span> A M Shareef
          </h2>

          <p className="about-para fade-in">
            Dr. A.M. Shareef is a leader in dentistry, business networking,
            and community service. His career reflects a deep commitment
            to professional excellence, ethical practice, and meaningful
            community development.
          </p>

          <div className="about-block fade-in delay">
            <h3>Education & Early Career</h3>
            <p>
              Dr. Shareef’s journey began with a strong foundation in
              dental science, where he developed exceptional clinical
              skills and a patient-centric approach. From the early
              stages of his career, he established himself as a
              compassionate and skilled practitioner with a passion for
              continuous learning and innovation in dental care.
            </p>
          </div>

          <div className="about-block fade-in delay-2">
            <h3>Chief Dental Surgeon – TANZA Dental</h3>
            <p>
              As the Chief Dental Surgeon at <strong>TANZA Dental</strong>,
              Dr. Shareef has transformed the clinic into a trusted and
              reputable practice. Under his leadership, TANZA Dental is
              known for its cutting-edge treatments, state-of-the-art
              technology, and highly personalized patient care.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="about-image-container">
          <img
            ref={imageRef}
            src={image}
            alt="Dr A M Shareef"
            className="about-image"
          />
        </div>

      </div>
    </section>
  );
}
