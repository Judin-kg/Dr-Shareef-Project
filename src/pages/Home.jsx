
















// import React, { useEffect, useRef } from "react";
// import "../pages/Home.css";
// import video from "../assets/drshareef.mp4";

// export default function Home() {
//   const videoRef = useRef(null);

//   // Scroll-based video scale animation
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!videoRef.current) return;

//       const rect = videoRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight) {
//         const progress = Math.min(
//           1,
//           (windowHeight - rect.top) / windowHeight
//         );

//         videoRef.current.style.transform = `scale(${0.9 + progress * 0.15})`;
//         videoRef.current.style.opacity = progress;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section className="home-container" id="home">
//         <div className="home-bg"></div>

//         <div className="home-wrapper">
//           {/* IMAGE */}
//           <div className="home-image futuristic-glow">
//             <img
//               src="https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/DrShareef/drShareef_mwbm2x.png"
//               // src={image}
//               alt="Dr A M Shareef"
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="home-content">
//             <h1 className="main-title">
//               <span className="typing-name">
//                 <span className="home-title">DR.</span>
//                 <br />
//                 A M SHAREEF
//               </span>
//             </h1>

//             <div className="typing-roles">
//               <span>Dental Surgeon</span>
//               <span>Community Advocate</span>
//               <span>BNI Executive Director</span>
//             </div>
//           </div>
//         </div>
//       </section>

//     {/* ================= VIDEO SECTION ================= */}
// <section className="video-section">
//   <div className="video-wrapper futuristic-glass" ref={videoRef}>
//     <video
//       src={video}
//       autoPlay
//       loop
//       controls
//       playsInline
//     />

//     {/* QUOTE OVERLAY */}
//     <div className="video-quote">
//       <p>
//         “Success isn't just about building businesses—
//         <br />
//         it’s about creating value, inspiring people,
//         <br />
//         and leaving a lasting impact.”
//       </p>
//       <span>— Dr. A M Shareef, BNI Executive Director</span>
//     </div>
//   </div>
// </section>

//     </>
//   );
// }







// import React, { useEffect, useRef, useState } from "react";
// import "../pages/Home.css";
// import dummyVideo from "../assets/drshareef.mp4";

// export default function Home() {
//   const videoRef = useRef(null);
//   const [activeSlide, setActiveSlide] = useState(0);

//   // 👇 This will later come from admin panel
//   const [adminVideo, setAdminVideo] = useState(null);

//   // ================= Scroll Scale Animation =================
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!videoRef.current) return;

//       const rect = videoRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight) {
//         const progress = Math.min(
//           1,
//           (windowHeight - rect.top) / windowHeight
//         );

//         videoRef.current.style.transform = `scale(${0.9 + progress * 0.15})`;
//         videoRef.current.style.opacity = progress;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ================= Auto Slide Change =================
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev === 0 ? 1 : 0));
//     }, 8000); // 8 seconds per slide

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section className="home-container" id="home">
//         <div className="home-bg"></div>

//         <div className="home-wrapper">
//           {/* IMAGE */}
//           <div className="home-image futuristic-glow">
//             <img
//               src="https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/DrShareef/drShareef_mwbm2x.png"
//               alt="Dr A M Shareef"
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="home-content">
//             <h1 className="main-title">
//               <span className="typing-name">
//                 <span className="home-title">DR.</span>
//                 <br />
//                 A M SHAREEF
//               </span>
//             </h1>

//             <div className="typing-roles">
//               <span>Dental Surgeon</span>
//               <span>Community Advocate</span>
//               <span>BNI Executive Director</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= VIDEO SLIDER SECTION ================= */}
//       <section className="video-section">
//         <div className="video-wrapper futuristic-glass" ref={videoRef}>
          
//           {/* SLIDES */}
//           <div
//             className="video-slider"
//             style={{
//               transform: `translateX(-${activeSlide * 100}%)`,
//             }}
//           >
//             {/* -------- Slide 1: Dummy Video -------- */}
//             <div className="video-slide">
//               <video
//                 src={dummyVideo}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             {/* -------- Slide 2: Admin Video -------- */}
//             <div className="video-slide">
//               {adminVideo ? (
//                 <video
//                   src={adminVideo}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               ) : (
//                 <div className="video-placeholder">
//                   <p>Admin video will appear here</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* QUOTE */}
//           <div className="video-quote">
//             <p>
//               “Success isn't just about building businesses—
//               <br />
//               it’s about creating value, inspiring people,
//               <br />
//               and leaving a lasting impact.”
//             </p>
//             <span>— Dr. A M Shareef, BNI Executive Director</span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import "../pages/Home.css";
import video from "../assets/drshareef.mp4";

export default function Home() {
  const videoRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll animation (same as yours)
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        const progress = Math.min(
          1,
          (windowHeight - rect.top) / windowHeight
        );

        videoRef.current.style.transform = `scale(${0.9 + progress * 0.15})`;
        videoRef.current.style.opacity = progress;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fetch API videos
  useEffect(() => {
    fetch("https://dr-shareef-server.vercel.app/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.log(err));
  }, []);

  // Combine static + API videos
  const allVideos = [
    { video: video, title: "Static Video" },
    ...videos,
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === allVideos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allVideos.length - 1 : prev - 1
    );
  };

  return (
    <>
   
     <section className="home-container" id="home">
         <div className="home-bg"></div>

         <div className="home-wrapper">
          {/* IMAGE */}
          <div className="home-image futuristic-glow">
           <img
              src="https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/DrShareef/drShareef_mwbm2x.png"
              // src={image}
              alt="Dr A M Shareef"
            />
          </div>

          {/* CONTENT */}
          <div className="home-content">
            <h1 className="main-title">
              <span className="typing-name">
                <span className="home-title">DR.</span>
                <br />
                A M SHAREEF
              </span>
            </h1>

            <div className="typing-roles">
              <span>Dental Surgeon</span>
              <span>Community Advocate</span>
              <span>BNI Executive Director</span>
            </div>
          </div>
        </div>
      </section>
      {/* ================= VIDEO SECTION ================= */}
      <section className="video-section">
        <div className="video-wrapper futuristic-glass" ref={videoRef}>
          <video
            src={allVideos[currentIndex]?.video}
            controls
            autoPlay
            loop
            playsInline
          />

          {/* Quote Overlay (Keep same style) */}
          <div className="video-quote">
            <p>
              “Success isn't just about building businesses—
              <br />
              it’s about creating value, inspiring people,
              <br />
              and leaving a lasting impact.”
            </p>
            <span>
              — Dr. A M Shareef, BNI Executive Director
            </span>
          </div>

          {/* ✅ Carousel Buttons */}
          <button
            className="carousel-btn left"
            onClick={prevSlide}
          >
            ◀
          </button>

          <button
            className="carousel-btn right"
            onClick={nextSlide}
          >
            ▶
          </button>
        </div>
      </section>
    </>
  );
}