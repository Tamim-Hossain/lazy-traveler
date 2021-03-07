import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Google from "./Google";

const SignIn = () => {
	const [, setUserInfo, ,] = useContext(UserContext);
	const [error, setError] = useState("");
	const { register, handleSubmit, errors } = useForm();
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		document.title = "Sign In | Lazy Traveler";
	});

	const handleForm = (data) => {
		const { email, password } = data;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				const { email, password, displayName } = user;
				setUserInfo({
					isSignedIn: true,
					name: displayName,
					email,
					password,
				});
				setError("");
				history.replace(from);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<Row className="w-50 " style={{ margin: "0 auto" }}>
			<Col md={12} className="mt-4 shadow bg-light rounded mb-3">
				<h2 className="font-weight-bold text-center pt-2">Sign In</h2>
				<hr />
				<Form onSubmit={handleSubmit(handleForm)}>
					<Form.Group controlId="Email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Your Email..."
							ref={register({ required: true })}
							name="email"
						/>{" "}
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
					{error && <p className="text-danger">{error}</p>}
					<Button variant="danger" type="submit" block="true" className="w-50" style={{ margin: "0 auto" }}>
						Sign In
					</Button>
					<p className="mt-3 text-center">
						Don’t have an account?{" "}
						<Link to="/sign-up" className="text-danger text-decoration-none">
							Create a new account
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

export default SignIn;
