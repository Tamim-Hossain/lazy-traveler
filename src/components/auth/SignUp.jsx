import firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Google from "./Google";

const SignUp = () => {
	const { errors, register, handleSubmit } = useForm();

	const handleForm = (data) => {
		const { name, email, password } = data;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				handleName(name);
				console.log(user);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				// ..
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
		<Row>
			<Col md={12}>
				<Form onSubmit={handleSubmit(handleForm)}>
					<Form.Group controlId="Name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter You Name..."
							ref={register({ required: true })}
							name="name"
						/>
						{errors.name && (
							<span className="text-danger">Name is required.</span>
						)}
					</Form.Group>
					<Form.Group controlId="Email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Your Email..."
							ref={register({ required: true })}
							name="email"
						/>
						{errors.email && (
							<span className="text-danger">Email is required.</span>
						)}
					</Form.Group>
					<Form.Group controlId="Password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Your Password..."
							ref={register({ required: true })}
							name="password"
						/>
						{errors.password && (
							<span className="text-danger">Password is required.</span>
						)}
					</Form.Group>
					<Button variant="warning" type="submit" block="true">
						Sign Up
					</Button>
					<p>
						Already have an account?{" "}
						<Link to="/sign-in" className="text-warning text-decoration-none">
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
