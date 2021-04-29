import Heading from "../../layout/Heading";
import AdminNav from "../../layout/AdminNav";
import AdminMenu from "./AdminMenu";
import Nav from "react-bootstrap/Nav";

export default function AdminPage({ children }) {
  return (
    <>
      <Heading title="Holidaze Admin" />
      <AdminMenu />
      {children ? children : <p>Select a section</p>}
    </>
  );
}



/////////////////
/*return (
  <>
    <Heading title="Holidaze Admin" />
    <AdminMenu />
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className="nav-admin" href="/home">
        New messages
      </Nav.Link>
      <Nav.Link className="nav-admin" eventKey="link-1">
        Enquirez
      </Nav.Link>
      <Nav.Link className="nav-admin" eventKey="link-2">
        Create new establishment
      </Nav.Link>
    </Nav>
  </>
);
}*/
