import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Google from "./Google";

const SignIn = () => {
	const { register, handleSubmit, errors } = useForm();
	const [userInfo, setUserInfo] = useContext(UserContext);

	const handleForm = (data) => {
		const { email, password } = data;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				var user = userCredential.user;
				const { email, password, displayName } = user;
				setUserInfo({
					isSignedIn: true,
					name: displayName,
					email,
					password,
				});
			})
			.catch((error) => {
				// console.log(error.message);
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
							ref={register({ required: true })}
							name="email"
						/>{" "}
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
						Sign In
					</Button>
					<p>
						Don’t have an account?{" "}
						<Link to="/sign-up" className="text-warning text-decoration-none">
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
