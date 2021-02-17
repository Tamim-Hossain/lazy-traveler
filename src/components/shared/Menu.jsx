import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../icon/logo.png";

const Menu = () => {
	const logoStyle = {
		height: " 56px",
		width: "120.26119995117188px",
	};
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">
				<img src={logo} alt="" style={logoStyle} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-success">Search</Button>
			</Form>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#link">Link</Nav.Link>
					<Button variant="warning" as={Link} to="sign-in">
						Sign In
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
