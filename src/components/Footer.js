import React from "react";
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord, FaInstagram, FaPatreon, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container2">
        <div className="social-icons">
          <a href="https://github.com/B-Mustafa" className="icon" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://discord.com/users/790966930043305984" className="icon" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
          <a href="https://www.instagram.com/_mustafa_0203/?igshid=MzNINGNkZWQ4Mg%3D%3D" className="icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.patreon.com/_Mustafa" className="icon" target="_blank" rel="noopener noreferrer">
            <FaPatreon />
          </a>
          <a href="https://www.youtube.com/@MUSTAFA-up2ej" className="icon" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
        <p className="copyright">&copy; 2023 Mustafa Bhikhapurwala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
