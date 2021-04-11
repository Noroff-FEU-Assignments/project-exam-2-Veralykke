import Heading from "../layout/Heading";
import Nav from "react-bootstrap/Nav";



export default function Admin() {
	return ( 
    <>
     <Heading title="Holidaze Admin" />
     <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">New messages</Nav.Link>
  <Nav.Link eventKey="link-1">Enquirez</Nav.Link>
  <Nav.Link eventKey="link-2">Create new establishment</Nav.Link>
</Nav>
</>
)
}