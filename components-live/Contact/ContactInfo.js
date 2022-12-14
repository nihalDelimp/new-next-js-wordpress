import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul className="info">
          <li>
            <i className="lni lni-map-marker"></i>
            2750 Quadra Street Victoria, Canada.
          </li>
          <li>
            <i className="lni lni-phone"></i>
            <a href="tel:+1234567898">(+123) 456-7898</a>
          </li>
          <li>
            <i className="lni lni-envelope"></i>
            <a href="mailto:hello@siard.com">hello@siard.com</a>
          </li>
        </ul>

        <h3>Follow Us</h3>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/" target="_blank">
              Pinterest
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
