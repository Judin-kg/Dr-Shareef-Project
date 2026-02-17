// import React, { useEffect, useRef } from "react";
// import "./Contact.css";

// export default function Contact() {
//   const containerRef = useRef(null);

//   // Scroll-based futuristic scale animation
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight && rect.bottom > 0) {
//         const progress = Math.min(
//           1,
//           (windowHeight - rect.top) / windowHeight
//         );

//         const scale = 0.9 + progress * 0.1;
//         const opacity = 0.6 + progress * 0.4;

//         containerRef.current.style.transform = `scale(${scale}) translateY(${20 -
//           progress * 20}px)`;
//         containerRef.current.style.opacity = opacity;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="contact-section">
//       <div className="contact-overlay"></div>

//       <div ref={containerRef} className="contact-container">
//         <h2 className="contact-title">Get in Touch</h2>

//         <p className="contact-subtitle">
//           Let’s connect for dental care, community initiatives, or professional
//           collaborations.
//         </p>

//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <input type="text" placeholder="Subject" />
//           <textarea placeholder="Message" rows="5"></textarea>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const containerRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(1, (windowHeight - rect.top) / windowHeight);

        const scale = 0.9 + progress * 0.1;
        const opacity = 0.6 + progress * 0.4;

        containerRef.current.style.transform = `scale(${scale}) translateY(${20 - progress * 20}px)`;
        containerRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mail submit (NO BACKEND)
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value || "Website Contact";
    const message = form.message.value;

    const mailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink = `mailto:info@doctorshareef@hotmail?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <div className="contact-overlay"></div>

      <div ref={containerRef} className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        <p className="contact-subtitle">
          Let’s connect for dental care, community initiatives, or professional collaborations.
        </p>

        {/* Direct email display */}
        <p className="contact-email">
          📧 info@ doctorshareef@hotmail.com
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="subject" type="text" placeholder="Subject" />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
