




// import React from "react";
// import "../pages/Home.css";

// export default function Home() {
//   return (
//     <section className="home-container" id="home">
//       {/* Background glow */}
//       <div className="home-bg"></div>

//       <div className="home-wrapper">
//         {/* LEFT : Full-size Image */}
//         <div className="home-image fade-left">
//           <img
//             src="https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/DrShareef/drShareef_mwbm2x.png"
//             alt="Dr A M Shareef"
//           />
//         </div>

//         {/* RIGHT : Content */}
//         <div className="home-content fade-right">
//           <h1 className="main-title">
//             <span className="typing-name">DR. <br></br>A M SHAREEF</span>
           
//           </h1>

//           <p className="typing-roles">
//             <span>Dental Surgeon</span>
//             <span>Community Advocate</span>
//             <span>BNI Executive Director</span>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }










// import React, { useEffect, useRef } from "react";
// import "../pages/Home.css";
// import vedio from "../assets/drshareef.mp4"
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

//         videoRef.current.style.transform = `scale(${0.85 + progress * 0.25})`;
//         videoRef.current.style.opacity = progress;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
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
//               alt="Dr A M Shareef"
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="home-content">
//             <h1 className="main-title">
//               <span className="typing-name">
//                <span className="home-title">DR.</span><br /> A M SHAREEF
//               </span>
//             </h1>

//             <p className="typing-roles">
//               <span>Dental Surgeon</span>
//               <span>Community Advocate</span>
//               <span>BNI Executive Director</span>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= VIDEO SECTION ================= */}
//       <section className="video-section">
//         <div className="video-wrapper futuristic-glass" ref={videoRef}>
//           <video
//             src={vedio}   /* replace with your video */
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </div>
//       </section>
//     </>
//   );
// }







import React, { useEffect, useRef } from "react";
import "../pages/Home.css";
import video from "../assets/drshareef.mp4";

export default function Home() {
  const videoRef = useRef(null);

  // Scroll-based video scale animation
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

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="home-container" id="home">
        <div className="home-bg"></div>

        <div className="home-wrapper">
          {/* IMAGE */}
          <div className="home-image futuristic-glow">
            <img
              src="https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/DrShareef/drShareef_mwbm2x.png"
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
      src={video}
      autoPlay
      loop
      controls
      playsInline
    />

    {/* QUOTE OVERLAY */}
    <div className="video-quote">
      <p>
        “Success isn't just about building businesses—
        <br />
        it’s about creating value, inspiring people,
        <br />
        and leaving a lasting impact.”
      </p>
      <span>— Dr. A M Shareef, BNI Executive Director</span>
    </div>
  </div>
</section>

    </>
  );
}
