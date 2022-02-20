import React from "react";
import { footer, icons, contactInfo } from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footer}>
      <p>Software developer: Luciano Pennacchioni</p>
      <div className={contactInfo}>
        <p>Contact info:</p>
        <a
          href="https://github.com/lucianop3196"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fa fa-github fa-lg ${icons}`}></i>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/luciano-pennacchioni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fa fa-linkedin fa-lg ${icons}`}></i>
        </a>
        <a href="mailto: luciano.p3196@gmail.com">
          <i className={`fa fa-envelope fa-lg ${icons}`}></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
