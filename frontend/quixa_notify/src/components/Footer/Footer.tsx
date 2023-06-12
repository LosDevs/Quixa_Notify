import React from "react";
import "./Footer.css";
import { FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <p>QuixaNotify &copy;2023</p>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="">
            <FaEnvelope />
          </a>
        </div>
        <p>Suporte: (XX) XXXX-XXXX</p>
      </div>
    </footer>
  );
};

export default Footer;