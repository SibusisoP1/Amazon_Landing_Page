import "../styles/Footer.css";
import amazonLogo from "../assets/amazon.png";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer_signin">
        <h3>See personalized recommendations</h3>
        <button>Sign in</button>
        <p>
          New customer? <a href="#">Start here.</a>
        </p>
      </section>

      <section className="back-to-top">
        <a href="#top">Back to top</a>
      </section>

      <section className="footer-middle">
        <ul>
          <li>
            <h5>Get to Know Us</h5>
          </li>
          <li>Careers</li>
          <li>Legal Notices</li>
          <li>Welcome to Amazon</li>
        </ul>

        <ul>
          <li>
            <h5>Make Money with Us</h5>
          </li>
          <li>advertise your products</li>
          <li>Sell on Amazon</li>
          <li>Supply to Amazon</li>
        </ul>

        <ul>
          <li>
            <h5>Amazon Payment Methods</h5>
          </li>
          <li>Payment Methods Help</li>
        </ul>

        <ul>
          <li>
            <h5>Let Us Help You</h5>
          </li>
          <li>Track Packages or View Ordes</li>
          <li>Shipping & Delivery</li>
          <li>Returns & Replacements</li>
          <li>Recalls & Product Safety Alerts</li>
          <li>Customer Service</li>
          <li>Amazon Mobile App</li>
        </ul>
      </section>

      <section className="footer-logo">
        <img src={amazonLogo} alt="Amazon Logo" />
      </section>

      <section className="footer-semi-bottom">
        <ul>
          <li>
            <h5>Amazon advertising</h5>
          </li>
          <li>Find, attract, and engage customers</li>
        </ul>

        <ul>
          <li>
            <h5>Kindle Direct Publishing</h5>
          </li>
          <li>Indie Digital & Print</li>
          <li>Publishing</li>
          <li>Made easy</li>
        </ul>

        <ul>
          <li>
            <h5>IMDb</h5>
          </li>
          <li>Movies, TV & Celebrities</li>
        </ul>

        <ul>
          <li>
            <h5>Goodreads</h5>
          </li>
          <li>Book reviews & recommendations</li>
        </ul>

        <ul>
          <li>
            <h5>Amazon Web Services</h5>
          </li>
          <li>Scalable Cloud</li>
          <li>Computing Services</li>
        </ul>
      </section>

      <section className="footer-bottom">
        <div className="footer-bottom-link">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Cookie Notice</p>
          <p>Legal Notices</p>
          <p>Interest-Based Ads notice</p>
        </div>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </section>
    </div>
  );
};

export default Footer;
