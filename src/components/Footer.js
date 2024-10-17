import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        {/* Brand and Copyright */}
        <p className="mb-2">
          <strong>NewsBook</strong> &copy; 2024. All rights reserved.
        </p>

        {/* Additional Links */}
        <div className="d-flex justify-content-center mb-4">
          <a href="/terms" className="text-white text-decoration-none mx-2" > Terms of Service </a>
          |
          <a href="/privacy" className="text-white text-decoration-none mx-2"> Privacy Policy </a>
          |
          <a href="/contact" className="text-white text-decoration-none mx-2"> Contact Us </a>
        </div>

        {/* Social Media Links */}
        <p className="mb-2">Follow Us:</p>
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-3"
          >
            <i ><FaFacebook /></i> Facebook
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-3"
          >
            <i className="fab fa-twitter fa-lg"><FaTwitter /></i> Twitter
          </a>
          <a
            href="https://linkedin.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none mx-3"
          >
            <i className="fab fa-linkedin fa-lg"><FaLinkedin /></i> LinkedIn
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter mt-4">
          <h5>Subscribe to our Newsletter</h5>
          <form className="d-flex justify-content-center mt-3">
            <input
              type="email"
              className="form-control w-50"
              placeholder="Enter your email"
            />
            <button type="submit" className="btn btn-primary ms-2">
              Subscribe
            </button>
          </form>
        </div>

        {/* Small Disclaimer */}
        <p className="mt-4">
          Disclaimer: The information on this site is for news purposes only and does not constitute professional advice. Use of this site signifies your agreement to our terms.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
