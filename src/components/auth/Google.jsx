import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "react-bootstrap";
import firebaseConfig from "./firebaseConfig";

if (!firebase.app.length) {
	firebase.app();
} else {
	firebase.initializeApp(firebaseConfig);
}

const Google = () => {
	const handleGoogleSignIn = () => {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then((result) => {
				const credential = result.credential;
				const token = credential.accessToken;
				const user = result.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = error.credential;
				// ...
			});
	};
	return (
		<Button variant="warning" onClick={handleGoogleSignIn}>
			Sign In with Google
		</Button>
	);
};

export default Google;
