import Nav from "react-bootstrap/Nav";

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

export default Footer;
