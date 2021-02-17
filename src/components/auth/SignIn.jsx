import firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Google from "./Google";

const SignIn = () => {
	const { register, handleSubmit } = useForm();

	const handleForm = (data) => {
		const { email, password } = data;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	return (
		<Row>
			<Col md={12}>
				<Form onSubmit={handleSubmit(handleForm)}>
					<Form.Group controlId="Email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Your Email..."
							ref={register}
							name="email"
							required
						/>
					</Form.Group>
					<Form.Group controlId="Password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Your Password..."
							ref={register}
							name="password"
							required
						/>
					</Form.Group>
					<Button variant="warning" type="submit" block="true">
						Sign In
					</Button>
					<p>
						Don’t have an account?{" "}
						<Link to="/register" className="text-warning text-decoration-none">
							Create an account
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
