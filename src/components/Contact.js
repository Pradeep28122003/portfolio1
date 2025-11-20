import React, { useState, useEffect } from "react";
import { getProfile } from '../services/portfolioService';
import "./Contact.scss";

export default function Contact() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

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
              href={`mailto:${profile?.email || 'pradeepkumark2812@gmail.com'}`}
              className="contact-link"
            >
              {profile?.email || 'pradeepkumark2812@gmail.com'}
            </a>
          </p>
          <p>
            <span className="label">Phone:</span>{" "}
            <a href={`tel:${profile?.phone || '+918667477846'}`} className="contact-link">
              {profile?.phone || '+91 86674 77846'}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
