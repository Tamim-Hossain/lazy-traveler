import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Google from "./Google";

const SignUp = () => {
	const [userInfo, setUserInfo, bookingInfo, setBookingInfo] = useContext(UserContext);
	const { errors, register, handleSubmit } = useForm();
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		document.title = "Sign Up | Lazy Traveler";
	});

	const handleForm = (data) => {
		const { name, email, password } = data;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				handleName(name);
				const { email } = user;
				setUserInfo({
					isSignedIn: true,
					name,
					email,
					password,
				});
				history.replace(from);
			})
			.catch((error) => {
				// console.log(error.message);
			});
	};

	const handleName = (name) => {
		const user = firebase.auth().currentUser;

		user
			.updateProfile({
				displayName: name,
			})
			.then(() => {
				// Update successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<Row className="w-50" style={{ margin: "0 auto" }}>
			<Col md={12} className="mt-4 shadow bg-light rounded mb-3">
				<h2 className="font-weight-bold text-center pt-2">Sign Up</h2>
				<hr />
				<Form onSubmit={handleSubmit(handleForm)}>
					<Form.Group controlId="Name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter You Name..."
							ref={register({ required: true })}
							name="name"
						/>
						{errors.name && <span className="text-info">Name is required.</span>}
					</Form.Group>
					<Form.Group controlId="Email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Your Email..."
							ref={register({ required: true })}
							name="email"
						/>
						{errors.email && <span className="text-info">Email is required.</span>}
					</Form.Group>
					<Form.Group controlId="Password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Your Password..."
							ref={register({ required: true })}
							name="password"
						/>
						{errors.password && <span className="text-info">Password is required.</span>}
					</Form.Group>
					<Button
						variant="danger"
						type="submit"
						block="true"
						className="w-50"
						style={{ margin: "0 auto" }}
					>
						Sign Up
					</Button>
					<p className="mt-3 text-center">
						Already have an account?{" "}
						<Link to="/sign-in" className="text-danger text-decoration-none">
							Sign In
						</Link>
					</p>
				</Form>
			</Col>
			<Col md={12}>
				<Google />
			</Col>
		</Row>
	);
};

export default SignUp;
