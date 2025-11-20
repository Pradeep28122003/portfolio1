import React, { useState, useEffect } from "react";
import { getResume } from '../services/portfolioService';
import "./Resume.scss";

export default function Resume() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      const data = await getResume();
      setResume(data);
      setLoading(false);
    };

    fetchResume();
  }, []);

  if (loading) {
    return (
      <section className="resume-section" id="resume">
        <div className="resume-right">
          <div className="resume-content">
            <h1>Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="resume-section" id="resume">
      <div className="resume-left">
        <img src={resume?.preview_image_url || "/src/assets/res.photo.jpeg"} alt="Resume preview" />
      </div>

      <div className="resume-right">
        <div className="resume-content">
          <h1>Resume</h1>
          <p>
            {resume?.description || "You can view my resume here:"}{" "}
            <a
              className="resume-btn"
              href={resume?.file_url || "files/Pradeep Kumar resume. (1).pdf"}
              download={resume?.file_url?.split('/').pop() || "Pradeep Kumar resume. (1).pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
