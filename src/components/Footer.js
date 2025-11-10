
import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="py-6 text-center text-gray-400 bg-gray-950">
    © {new Date().getFullYear()} Pradeep Kumar — All Rights Reserved.
  </footer>
);

export default Footer;

