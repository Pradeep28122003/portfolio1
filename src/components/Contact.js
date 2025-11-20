import React from "react";
import "./Contact.scss";

export default function Contact() {
  const email = "pradeepkumark2812@gmail.com";
  const phone = "+91 86674 77846";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <p>If you want to discuss more in detail, please contact me at:</p>

        <div className="contact-info">
          <p>
            <span className="label">Email:</span>{" "}
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </p>

          <p>
            <span className="label">Phone:</span>{" "}
            <a href={`tel:${phone}`} className="contact-link">
              {phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
