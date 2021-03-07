import { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { UserContext } from "../../App";

const Review = () => {
	let history = useHistory();
	const [userInfo, , bookingInfo] = useContext(UserContext);

	const handleCancel = () => {
		swal({
			title: "Are you sure to cancel this session?",
			icon: "warning",
			buttons: ["No", "Yes"],
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				history.push("/");
			}
		});
	};

	const handleConfirm = () => {
		swal("Booking Successful.", "", "success");
		history.push("/");
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
					<Button variant="success" onClick={handleConfirm} className="mt-3">
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
