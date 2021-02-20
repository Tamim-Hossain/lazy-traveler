import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Thanks = () => {
	return (
		<Container>
			<p className="display-4 d-flex justify-content-center text-info mt-5 p-5">
				Booking Completed Successfully.
				<br />
				Thanks For Choosing Our Service.
			</p>
			<br />
			<Link
				to="/"
				className="display-4 d-flex justify-content-center text-danger"
			>
				Back To Home
			</Link>
		</Container>
	);
};

export default Thanks;
