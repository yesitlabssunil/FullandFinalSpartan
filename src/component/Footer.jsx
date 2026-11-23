import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";

// ========== SHIVM NEW CHANGES START ==========
import {
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
// ========== SHIVM NEW CHANGES END ==========
import { globalFooter } from "../redux/slices/secondSlice";

const Footer = () => {
  const dispatch = useDispatch();
  // ========== SHIVM NEW CHANGES START ==========
  const { footerData } = useSelector((state) => state.second);
  // ========== SHIVM NEW CHANGES END ==========

  useEffect(() => {
    dispatch(globalFooter())
  }, [dispatch])

  return (
    <footer className="footer-wrapper">
      <div className="custom-container">
        <div className="row gy-4">

          {/* Logo Section */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-box">
              <Link to="/">
              <img src={logo} alt="Spartan Logo" />
              </Link>

              <p>
                Military precision. Cybersecurity execution.
                <br />
                Federal contract protection.
              </p>
              {/* <p>Cybersecurity Compliance Built for the <br/> Federal Mission</p> */}

              <div className="social-icons">
                <a href="https://www.linkedin.com/in/raphael-warren-a7280a188/"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <FaLinkedinIn />
                </a>

                {/* <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaXTwitter />
                </a> */}


              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <p>COMPANY</p>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              {/* <li><Link to="/">Services</Link></li> */}
              {/* <li><Link to="/resources">Resources</Link></li> */}
              <li><Link to="/policies">Policies</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="col-lg-3 col-md-6">
            {/* <h6>COMPLIANCE</h6> */}
            <p>COMPLIANCE</p>

            <ul>
              <li><Link to="/cmmc">CMMC 2.0</Link></li>
              <li><Link to="/microsoft-365-security">Microsoft 365 Security</Link></li>
              <li><Link to="/compliance-systems">Compliance Systems</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <p>CONTACT</p>

            <ul className="contact-list">

              {(footerData?.emails && footerData.emails.length > 0
                ? footerData.emails
                : ["spartanconsults@spartan-cs.com", "rwarren@spartan-cs.com"]
              ).map((item, index) => (
                <li key={index}>
                  <FaEnvelope />
                  <a href={`mailto:${item}`}>
                    {item}
                  </a>
                </li>
              ))}

              <li>
                <FaLocationDot />
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerData?.location || "Albuquerque, NM 87113")}`}
                  target="_blank" rel="noopener noreferrer">
                  {footerData?.location || "Albuquerque, NM 87113"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Spartan Cybersecurity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;