// import React, { useEffect, useState } from "react";
// import "../pages/Gallery.css";

// export default function Gallery() {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       // Control scale range
//       const newScale = Math.max(0.85, 1 - scrollY / 2000);
//       setScale(newScale);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="gallery-section">
//       <h2 className="gallery-title">Frames of Progress</h2>

//       <div className="gallery-grid">
//         {[1, 2, 3, 4, 5, 6].map((img) => (
//           <div
//             key={img}
//             className="gallery-item"
//             style={{ transform: `scale(${scale})` }}
//           >
//             <img
//               src={`/images/gallery${img}.jpg`}
//               alt={`Gallery ${img}`}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import "./Gallery.css";

import img from "../assets/img.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img3.webp";
import img3 from "../assets/img2.webp";

const images = [img, img2, img3, img1];

export default function Gallery() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.min(
            1,
            (windowHeight - rect.top) / windowHeight
          );

          el.style.transform = `scale(${0.9 + progress * 0.15})`;
          el.style.opacity = progress;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="gallery-section" id="gallery">
         {/* Heading */}
      <div className="gallery-heading">
        <h2 className="gallery-title"><span className="title-sub">Frames of</span> Progress</h2>
        <p className="gallery-subtitle">
          A glimpse into excellence, precision & care
        </p>
      </div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


