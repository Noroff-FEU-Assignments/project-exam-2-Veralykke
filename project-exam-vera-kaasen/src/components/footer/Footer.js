/*import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Contact</Nav.Link>
        <Nav.Link href="/home">Admin</Nav.Link>
      </Nav>
    </>
  );
};

export default Footer;*/

import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
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
