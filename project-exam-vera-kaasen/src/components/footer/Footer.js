import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon, fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faFacebook,
faInstagram,
faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
    <div className="social-container">
      <a href="https://www.facebook.com/"
      className="facebook-social"><FontAwesomeIcon icon= {faFacebook} size="2x" />
      </a>

      <a href="https://www.instagram.com/"
      className="instagram-social"><FontAwesomeIcon icon= {faInstagram} size="2x" />
      </a>

      <a href="https://twitter.com/"
      className="twitter-social"><FontAwesomeIcon icon= {faTwitter} size="2x" />
      </a>
    </div>

      <Nav defaultActiveKey="/home" className="flex-column">
        <div className="row">
          <div className="col">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </div>
          <div className="col">
            <Nav.Link href="/login">Admin</Nav.Link>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Footer;
