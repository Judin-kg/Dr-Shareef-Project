import React, { useEffect, useState } from "react";
import "./TypingText.css";

export default function TypingText({
  texts = [],
  speed = 100,
  deleteSpeed = 50,
  delay = 1500,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
}
