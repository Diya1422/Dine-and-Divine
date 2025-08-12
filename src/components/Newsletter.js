import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Enter your email address to receive new recipes by email.</p>
      <div className="form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
