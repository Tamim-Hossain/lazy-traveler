import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Review = () => {
	const [userInfo, setUserInfo, bookingInfo, setBookingInfo] = useContext(
		UserContext
	);

	const { name, email } = userInfo;
	const { origin, destination, fromDate, toDate } = bookingInfo;
	return (
		<Container>
			<Row className="bg-light p-5 shadow w-50" style={{ margin: "0 auto" }}>
				<Col md={12}>
					<h2>Please Review Information</h2>
					<hr />
					<p>Name: {name}</p>
					<p>Email: {email}</p>
					<p>Origin: {origin}</p>
					<p>Destination: {destination}</p>
					<p>From: {fromDate}</p>
					<p>To: {toDate}</p>
					<Button variant="danger" as={Link} to="/complete">
						Complete Booking &#187;
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Review;
