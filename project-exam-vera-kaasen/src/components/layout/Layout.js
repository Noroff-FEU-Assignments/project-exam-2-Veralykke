import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Hotels from "../hotels/Hotels";
import Contact from "../contact/Contact";

function Layout() {
	return (
		<Router>
		<Navbar bg="light" variant="light" expand="lg">
			<Navbar.Brand href="/">Holidaze</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/hotels/">Hotels</Nav.Link>
					<Nav.Link href="/contact/">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		<Container>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/hotels" component={Hotels} />
			<Route path="/contact" component={Contact} />
		</Switch>
	</Container>
</Router>
	);
}

export default Layout;