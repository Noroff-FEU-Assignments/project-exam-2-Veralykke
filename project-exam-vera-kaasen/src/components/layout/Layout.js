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
//import HotelList from "../hotels/HotelList";
import AllHotels from "../hotels/AllHotels";
import HotelDetail from "../hotels/HotelDetail";
import Contact from "../contact/Contact";
import Booking from "../booking/Booking";
import LoginPage from "../login/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import AdminNav from "../admin/posts/AdminNav";
import PostPage from "../admin/posts/PostPage";
import AddPost from "../admin/posts/AddPost";
import EditPost from "../admin/posts/EditPost";
import AdminPage from "../admin/AdminPage";

//NB NB NB  SETT INN RUNDT LAYOUT: har satt på app.js  

function Layout() {
  return (
    <AuthProvider>  
    <Router>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <img src="/images/logooo.png" alt="logo" id="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/hotels/">Hotels</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
            <Nav.Link href="/LoginPage/">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={AllHotels} />
          <Route path="/hotel/:id" component={HotelDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/booking" component={Booking} />
          <Route path="/adminPage" exact component={AdminPage} />
          <Route path="/admin/posts" exact component={PostPage} />
          <Route path="/admin/posts/add" component={AddPost} />
         <Route path="/admin/posts/edit/:id" component={EditPost} />
        </Switch>
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default Layout;
