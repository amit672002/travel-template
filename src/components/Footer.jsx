import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container bg-black py-8">
      <section className="footer-subscription flex flex-col items-center text-center mb-4 ">
        <p className="footer-subscription-heading text-white text-lg">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text text-gray-400">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas mt-4">
          <form>
            <input
              className="footer-input px-4 py-2 rounded-l-lg border border-gray-600 bg-gray-700 text-white focus:outline-none"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="px-4 py-2 rounded-r-lg bg-blue-500 text-white ml-1 hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 text-gray-400 ml-20 mt-10">
        <div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2 ">About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Social Media</h2>
            <Link to="/" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              <p>Instagram</p>
            </Link>
            <Link to="/" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
              <p>Facebook</p>
            </Link>
            <Link to="/" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faYoutube} className="mr-2" />
              <p>Youtube</p>
            </Link>
            <Link to="/" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />

              <p>Twitter</p>
            </Link>
            <Link to="/" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />

              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media flex justify-center items-center mt-8">
        <div className="social-media-wrap">
          <div className="footer-logo text-white text-3xl font-semibold">
            <Link to="/" className="social-logo flex items-center">
              LOGO
            </Link>
          </div>
          <small className="website-rights text-gray-400">LOGO © 2024</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
