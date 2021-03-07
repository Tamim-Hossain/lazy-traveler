import { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatch from "./components/404/NoMatch";
import PrivateRoute from "./components/auth/PrivateRoute";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Booking from "./components/booking/Booking";
import Review from "./components/complete/Review";
import Main from "./components/home/Main";
import Hotel from "./components/hotel/Hotel";
import Menu from "./components/shared/Menu";

export const UserContext = createContext();

const App = () => {
	const [userInfo, setUserInfo] = useState({
		isSignedIn: false,
		name: "",
		email: "",
		password: "",
	});

	const [bookingInfo, setBookingInfo] = useState();
	return (
		<UserContext.Provider value={[userInfo, setUserInfo, bookingInfo, setBookingInfo]}>
			<BrowserRouter>
				<Menu />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/booking/:url" component={Booking} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
					<PrivateRoute path="/hotel">
						<Hotel />
					</PrivateRoute>
					<PrivateRoute path="/review-booking">
						<Review />
					</PrivateRoute>
					<Route path="*" component={NoMatch} />
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
