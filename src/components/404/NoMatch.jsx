import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoMatch = () => {
	return (
		<Container>
			<img
				className="mx-auto d-block img-fluid"
				src="https://image.freepik.com/free-vector/404-liquid-error_114341-59.jpg"
				alt=""
			/>
			<Link to="/" className="display-4 d-flex justify-content-center text-danger">
				Back To Home
			</Link>
		</Container>
	);
};

export default NoMatch;
