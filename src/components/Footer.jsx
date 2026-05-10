import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div>
          <h2>TECHCHIC</h2>

          <p>Luxury shopping experience built with Love.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Cart</Link>
        </div>

        <div>
          <h3>Categories</h3>

          <p>Fashion</p>
          <p>Electronics</p>
          <p>Home</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>Phurtune7@gmail.com</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 TECHCHIC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
