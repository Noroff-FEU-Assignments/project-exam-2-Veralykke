import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import HotelList from "../hotels/HotelList";
import HotelDetail from "../hotels/HotelDetail";
import Contact from "../contact/Contact";
import Admin from "../admin/Admin";
import Booking from "../booking/Booking";
import LoginPage from "../login/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import NavAdmin from "../layout/NavAdmin";


function Layout() {
  return (
    <AuthProvider>
    <Router>
      <NavAdmin/>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <img src="/images/logooo.png" alt="logo" id="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/hotels/">Hotels</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
            <Nav.Link href="/LoginPage/">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={HotelList} />
          <Route path="/hotels/:id" component={HotelDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/booking" component={Booking} />
        </Switch>
      </Container>
    </Router>
    </AuthProvider> 
  );
}

export default Layout;
