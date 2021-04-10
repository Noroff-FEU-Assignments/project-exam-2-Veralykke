import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router,Switch,Route,NavLink,} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import HotelList from "../hotels/HotelList";
import HotelDetail from "../hotels/HotelDetail";
import Contact from "../contact/Contact";
import Login from "../login/LoginPage";
//import LoginPage from "../login/LoginPage";
//import { AuthProvider } from "./context/AuthContext";

function Layout() {
  return (
    //<AuthProvider>
    <Router>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">Holidaze</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/hotels/">Hotels</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
            <Nav.Link href="/login/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={HotelList} />
          <Route path="/hotels/:id" component={HotelDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </Router>
    //</AuthProvider>
  );
}

export default Layout;
