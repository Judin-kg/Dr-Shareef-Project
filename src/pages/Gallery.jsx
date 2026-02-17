





// import React, { useEffect, useRef } from "react";
// import "./Gallery.css";

// import img from "../assets/img.webp";
// import img1 from "../assets/img1.webp";
// import img2 from "../assets/img3.webp";
// import img3 from "../assets/img2.webp";

// const images = [img, img2, img3, img1];

// export default function Gallery() {
//   const imageRefs = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       imageRefs.current.forEach((el) => {
//         if (!el) return;

//         const rect = el.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         const elementCenter = rect.top + rect.height / 2;
//         const screenCenter = windowHeight / 2;

//         const distance = elementCenter - screenCenter;
//         const absDistance = Math.abs(distance);
//         const maxDistance = windowHeight / 1.2;

//         let progress = 1 - absDistance / maxDistance;
//         progress = Math.max(0, Math.min(1, progress));

//         // 🎥 Parallax (move slower vertically)
//         const parallaxY = distance * 0.08;

//         // 🔥 3D tilt
//         const rotateX = -distance * 0.02;
//         const rotateY = distance * 0.015;

//         // 💎 Scale effect
//         const scale = 0.9 + progress * 0.25;

//         // ✨ Blur background images
//         const blur = 6 - progress * 6;
//         const brightness = 0.6 + progress * 0.4;

//         el.style.transform = `
//           perspective(1000px)
//           translateY(${parallaxY}px)
//           scale(${scale})
//           rotateX(${rotateX}deg)
//           rotateY(${rotateY}deg)
//         `;

//         el.style.filter = `
//           blur(${blur}px)
//           brightness(${brightness})
//         `;

//         el.style.opacity = 0.5 + progress * 0.5;
//       });
//     };

//     const smoothScroll = () => {
//       requestAnimationFrame(handleScroll);
//     };

//     window.addEventListener("scroll", smoothScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", smoothScroll);
//   }, []);

//   return (
//     <section className="gallery-section" id="gallery">
//       <div className="gallery-heading">
//         <h2 className="gallery-title">
//           <span className="title-sub">Frames of</span> Progress
//         </h2>
//         <p className="gallery-subtitle">
//           A glimpse into excellence, precision & care
//         </p>
//       </div>

//       <div className="gallery-grid">
//         {images.map((src, index) => (
//           <div className="gallery-item" key={index}>
//             <img
//               ref={(el) => (imageRefs.current[index] = el)}
//               src={src}
//               alt={`Gallery ${index + 1}`}
//               className="gallery-image"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import "./Gallery.css";

// import img from "../assets/img.webp";
// import img1 from "../assets/img1.webp";
// import img2 from "../assets/img3.webp";
// import img3 from "../assets/img2.webp";

// const dummyImages = [img, img2, img3, img1];

// export default function Gallery() {

//   const imageRefs = useRef([]);
//   const [apiImages, setApiImages] = useState([]);

//   /* ===============================
//      FETCH GALLERY FROM BACKEND
//   =============================== */

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/gallery");
//         const data = await res.json();

//         // extract image urls
//         const urls = data.map(item => item.image);
//         setApiImages(urls);

//       } catch (err) {
//         console.error("Gallery API error:", err);
//       }
//     };

//     fetchGallery();
//   }, []);

//   // Combine local + API images
//   const images = [...dummyImages, ...apiImages];

//   /* ===============================
//      SCROLL ANIMATION
//   =============================== */

//   useEffect(() => {
//     const handleScroll = () => {
//       imageRefs.current.forEach((el) => {
//         if (!el) return;

//         const rect = el.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         const elementCenter = rect.top + rect.height / 2;
//         const screenCenter = windowHeight / 2;

//         const distance = elementCenter - screenCenter;
//         const absDistance = Math.abs(distance);
//         const maxDistance = windowHeight / 1.2;

//         let progress = 1 - absDistance / maxDistance;
//         progress = Math.max(0, Math.min(1, progress));

//         const parallaxY = distance * 0.08;
//         const rotateX = -distance * 0.02;
//         const rotateY = distance * 0.015;
//         const scale = 0.9 + progress * 0.25;

//         const blur = 6 - progress * 6;
//         const brightness = 0.6 + progress * 0.4;

//         el.style.transform = `
//           perspective(1000px)
//           translateY(${parallaxY}px)
//           scale(${scale})
//           rotateX(${rotateX}deg)
//           rotateY(${rotateY}deg)
//         `;

//         el.style.filter = `
//           blur(${blur}px)
//           brightness(${brightness})
//         `;

//         el.style.opacity = 0.5 + progress * 0.5;
//       });
//     };

//     const smoothScroll = () => requestAnimationFrame(handleScroll);

//     window.addEventListener("scroll", smoothScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", smoothScroll);
//   }, [images]); // re-run when API images load

//   return (
//     <section className="gallery-section" id="gallery">
//       <div className="gallery-heading">
//         <h2 className="gallery-title">
//           <span className="title-sub">Frames of</span> Progress
//         </h2>
//         <p className="gallery-subtitle">
//           A glimpse into excellence, precision & care
//         </p>
//       </div>

//       <div className="gallery-grid">
//         {images.map((src, index) => (
//           <div className="gallery-item" key={index}>
//             <img
//               ref={(el) => (imageRefs.current[index] = el)}
//               src={src}
//               alt={`Gallery ${index + 1}`}
//               className="gallery-image"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

import img from "../assets/img.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img3.webp";
import img3 from "../assets/img2.webp";

const dummyImages = [img, img2, img3, img1];

export default function Gallery() {

  const imageRefs = useRef([]);
  const [apiImages, setApiImages] = useState([]);
  const [showMore, setShowMore] = useState(false);

  /* ===============================
     FETCH GALLERY (LATEST FIRST)
  =============================== */

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/gallery");
        const data = await res.json();

        // latest images first
        const urls = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(item => item.image);

        setApiImages(urls);

      } catch (err) {
        console.error("Gallery API error:", err);
      }
    };

    fetchGallery();
  }, []);

  // Latest images should appear first
  const allImages = [...apiImages, ...dummyImages];

  const firstFour = allImages.slice(0, 4);
  const remainingImages = allImages.slice(4);

  const imagesToRender = showMore ? allImages : firstFour;

  /* ===============================
     SCROLL ANIMATION
  =============================== */

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;

        const distance = elementCenter - screenCenter;
        const absDistance = Math.abs(distance);
        const maxDistance = windowHeight / 1.2;

        let progress = 1 - absDistance / maxDistance;
        progress = Math.max(0, Math.min(1, progress));

        const parallaxY = distance * 0.08;
        const rotateX = -distance * 0.02;
        const rotateY = distance * 0.015;
        const scale = 0.9 + progress * 0.25;

        const blur = 6 - progress * 6;
        const brightness = 0.6 + progress * 0.4;

        el.style.transform = `
          perspective(1000px)
          translateY(${parallaxY}px)
          scale(${scale})
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;

        el.style.filter = `
          blur(${blur}px)
          brightness(${brightness})
        `;

        el.style.opacity = 0.5 + progress * 0.5;
      });
    };

    const smoothScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", smoothScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", smoothScroll);
  }, [imagesToRender]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <h2 className="gallery-title">
          <span className="title-sub">Frames of</span> Progress
        </h2>
        <p className="gallery-subtitle">
          A glimpse into excellence, precision & care
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="gallery-grid">
        {imagesToRender.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* MORE BUTTON */}
      {!showMore && remainingImages.length > 0 && (
        <div className="gallery-more">
          <button onClick={() => setShowMore(true)}>
            View More
          </button>
        </div>
      )}

    </section>
  );
}
