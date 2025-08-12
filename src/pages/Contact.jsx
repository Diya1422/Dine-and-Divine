import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form
        className="contact-form"
        action="https://formspree.io/f/mrbljqap"  // <-- Apna Formspree form ID yahan daalein
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <h3>Or connect with me on:</h3>

        <a
          href="https://www.linkedin.com/in/diya-sharma-0087ab241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>

        <a
          href="https://github.com/Diya1422"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>

        <a
          href="https://x.com/DiyaKatihar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  );
}
