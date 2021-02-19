import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../icon/logo.png";

const Menu = () => {
	const [userInfo, setUserInfo] = useContext(UserContext);
	const { name, isSignedIn } = userInfo;

	const logoStyle = {
		height: " 70px",
		width: "110px",
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
		<Navbar>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={logo} alt="" style={logoStyle} />
				</Navbar.Brand>
				{name && (
					<Nav className="ml-auto">
						Welcome,
						<span className="font-weight-bold font-italic ml-1 text-success">
							{name.split(" ")[0]}
						</span>
					</Nav>
				)}
				<Nav className="ml-5">
					{isSignedIn ? (
						<Button variant="warning" as={Link} to="/" onClick={handleSignOut}>
							Sign Out
						</Button>
					) : (
						<Button variant="danger" as={Link} to="/sign-in">
							Sign In
						</Button>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Menu;
