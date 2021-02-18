import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import displayData from "../../fakeData/displayData.json";

const Booking = () => {
	const { register, handleSubmit } = useForm();
	const { url } = useParams();
	const [fullDetails, setFullDetails] = useState({});
	const { placeName, fullDescription } = fullDetails;
	let history = useHistory();

	const handleDetails = (detail) => {
		const fullDetails = displayData.find((data) => data.url === detail);
		setFullDetails(fullDetails || "");
	};

	useEffect(() => {
		handleDetails(url);
	}, [url]);

	const handleForm = (data) => {
		// console.log(data);
		if (data) {
			history.push("/hotel");
		}
	};
	return (
		<Container fluid>
			<Row className="d-flex align-items-center pt-5 mt-3">
				<Col md={6} className="pl-5">
					<h1 className="font-weight-bold text-uppercase display-4">
						{placeName}
					</h1>
					<p>{fullDescription}</p>
				</Col>
				<Col md={6} className="pr-5 pl-5">
					<Form onSubmit={handleSubmit(handleForm)}>
						<Form.Group controlId="origin">
							<Form.Label>Origin</Form.Label>
							<Form.Control as="select" required ref={register} name="origin">
								<option value="" hidden>
									Choose Origin...
								</option>
								<option value="Khulna">Khulna</option>
								<option value="Dhaka">Dhaka</option>
								<option value="Mymensingh">Mymensingh</option>
								<option value="Barishal">Barisal</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="destination">
							<Form.Label>Destination</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Destination..."
								required
								value={placeName}
								ref={register}
								name="destination"
							/>
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col} controlId="from">
								<Form.Label>From</Form.Label>
								<Form.Control
									type="date"
									required
									ref={register}
									name="fromDate"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="to">
								<Form.Label>To</Form.Label>
								<Form.Control
									type="date"
									required
									ref={register}
									name="toDate"
								/>
							</Form.Group>
						</Form.Row>
						<Button
							className="font-weight-bold"
							type="submit"
							variant="warning"
							block
						>
							Continue Booking &#187;
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Booking;
