import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../icon/logo.png";

const Menu = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const { isSignedIn } = userInfo;

	const logoStyle = {
		height: " 50px",
		width: "120px",
	};

	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				setUserInfo("");
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">
				<img src={logo} alt="" style={logoStyle} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/contact">
						contact
					</Nav.Link>
					{isSignedIn ? (
						<Button variant="warning" as={Link} to="/" onClick={handleSignOut}>
							Sign Out
						</Button>
					) : (
						<Button variant="warning" as={Link} to="/sign-in">
							Sign In
						</Button>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
