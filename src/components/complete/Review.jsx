import { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Review = () => {
	let history = useHistory();
	const [userInfo, setUserInfo, bookingInfo, setBookingInfo] = useContext(UserContext);

	const handleCancel = () => {
		const confirm = window.confirm("Are you sure to cancel this session?");
		if (confirm) {
			history.push("/");
		}
	};

	useEffect(() => {
		document.title = "Review | Lazy Traveler";
	});

	const { name, email } = userInfo;
	const { origin, destination, fromDate, toDate } = bookingInfo;
	return (
		<Container>
			<Row className="bg-light p-5 shadow w-75" style={{ margin: "0 auto" }}>
				<Col md={12}>
					<h2>Please Review Information</h2>
					<hr />
					<p>Name: {name}</p>
					<p>Email: {email}</p>
					<p>Origin: {origin}</p>
					<p>Destination: {destination}</p>
					<p>From: {fromDate}</p>
					<p>To: {toDate}</p>
					<Button variant="success" as={Link} to="/complete" className="mt-3">
						Confirm Booking &#187;
					</Button>
					<Button onClick={handleCancel} variant="warning" className="mt-3 ml-5">
						Cancel Booking &#187;
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Review;
