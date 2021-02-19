import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from "./firebaseConfig";

if (!firebase.app.length) {
	firebase.app();
} else {
	firebase.initializeApp(firebaseConfig);
}

const Google = () => {
	const [userInfo, setUseInfo] = useContext(UserContext);
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const handleGoogleSignIn = () => {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then((result) => {
				const user = result.user;
				const { displayName, email } = user;
				setUseInfo({
					isSignedIn: true,
					name: displayName,
					email,
				});
				history.replace(from);
			})
			.catch((error) => {
				// console.log(error.message);
			});
	};
	return (
		<Button
			className="mt-4 w-50"
			block="true"
			variant="danger"
			onClick={handleGoogleSignIn}
			style={{ margin: "0 auto" }}
		>
			Continue with Google
		</Button>
	);
};

export default Google;
