import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import firebaseConfig from "./firebaseConfig";

if (!firebase.app.length) {
	firebase.app();
} else {
	firebase.initializeApp(firebaseConfig);
}

const Google = () => {
	const [userInfo, setUseInfo] = useContext(UserContext);

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
			})
			.catch((error) => {
				// console.log(error.message);
			});
	};
	return (
		<Button variant="warning" onClick={handleGoogleSignIn}>
			Sign In with Google
		</Button>
	);
};

export default Google;
