import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import Booking from "./components/Booking/Booking";
import Main from "./components/Home/Main";
import Menu from "./components/shared/Menu";

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/booking/:url" component={Booking} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="*" component={() => <h1>Not found</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
