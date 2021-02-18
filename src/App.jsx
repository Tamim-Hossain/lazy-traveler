import { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Booking from "./components/booking/Booking";
import Main from "./components/home/Main";
import Hotel from "./components/hotel/Hotel";
import PrivateRoute from "./components/private/PrivateRoute";
import Menu from "./components/shared/Menu";

export const UserContext = createContext();

const App = () => {
	const [userInfo, setUserInfo] = useState({
		isSignedIn: false,
		name: "",
		email: "",
		password: "",
	});
	return (
		<UserContext.Provider value={[userInfo, setUserInfo]}>
			<BrowserRouter>
				<Menu />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/booking/:url" component={Booking} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
					<PrivateRoute path="/hotel" component={Hotel} />
					<Route path="*" component={() => <h1>Not found</h1>} />
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
