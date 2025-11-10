import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <p>
          If you want to discuss more in detail, please contact me at:
        </p>

        <div className="contact-info">
          <p>
            <span className="label">Email:</span>{" "}
            <a
              href="mailto:pradeepkumark2812@gmail.com"
              className="contact-link"
            >
              pradeepkumark2812@gmail.com
            </a>
          </p>
          <p>
            <span className="label">Phone:</span>{" "}
            <a href="tel:+918667477846" className="contact-link">
              +91 86674 77846
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
