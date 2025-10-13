// components/Footer.js
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook,FaInstagram ,FaWhatsapp  } from "react-icons/fa6";
  

export default function Footer() {
  return (
    <footer className="footer-section" role="contentinfo" aria-label="Footer">
      {/* Newsletter Section */}
      <div className="newsletter text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold footerTitle mb-3">JOIN OUR EAT WELL, BE WELL CULTURE.</h2>
          <p className="text-muted footersubTitle mb-4">
            Stay up-to-date with our new openings, upcoming events, seasonal specials, and promotions.
          </p>
          <form className="d-flex justify-content-center flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="btn  newsletter-btn fw-semibold">
              SIGN ME UP!
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer text-white pt-5 pb-3">
        <div className="container text-center text-md-start">
          <div className="row align-items-start">
            <div className="col-md-12 text-center mb-4 mb-md-0">
              <div className="social-icons mb-4">
                <a href="#" className="social-circle"><FaFacebook /></a>
                <a href="#" className="social-circle"><FaInstagram /></a>
                <a href="#" className="social-circle"><FaWhatsapp /></a>
              </div>

              <ul className="list-inline footer-links mb-4">
                <li className="list-inline-item"><a href="#">DELHI</a></li>
                <li className="list-inline-item"><a href="#">UP</a></li>
                <li className="list-inline-item"><a href="#">HARYANA</a></li>
                <li className="list-inline-item"><a href="#">PUNJAB</a></li>
                <li className="list-inline-item"><a href="#">UTTRAKHNAD</a></li>
                <li className="list-inline-item"><a href="#">JHARKHAND</a></li>
                <li className="list-inline-item"><a href="#">RAJASTHAN</a></li>
                <li className="list-inline-item"><a href="#">CATERING</a></li>
                <li className="list-inline-item"><a href="#">DELIVERY</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Green Bar */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-0 small">
          HEALTHY FAST-CASUAL FOOD, CRAFTED WITH <span className="text-white">❤</span> IN MINNEAPOLIS
        </p>
        <p className="mb-0 small">© {new Date().getFullYear()} Agra Culture Kitchen & Press | ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
