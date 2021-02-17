import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Booking from "./components/booking/Booking";
import Main from "./components/home/Main";
import Hotel from "./components/hotel/Hotel";
import Menu from "./components/shared/Menu";

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/booking/:url" component={Booking} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/register" component={SignUp} />
				<Route path="/booking/hotel" component={Hotel} />
				<Route path="*" component={() => <h1>Not found</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
