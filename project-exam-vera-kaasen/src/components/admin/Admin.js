import Heading from "../layout/Heading";
import NavAdmin from "../layout/NavAdmin";

export default function Admin() {
	return ( 
    <>
     <Heading title="Holidaze Admin" />
     <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link className="nav-admin" href="/home">New messages</Nav.Link>
  <Nav.Link className="nav-admin" eventKey="link-1">Enquirez</Nav.Link>
  <Nav.Link className="nav-admin" eventKey="link-2">Create new establishment</Nav.Link>
</Nav>
</>
)
}