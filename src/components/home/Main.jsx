import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import displayData from "../../fakeData/displayData.json";
import "./Main.css";

const Main = () => {
	const [shortDetails, setShortDetails] = useState({});
	const { placeName, shortDescription, url, img } = shortDetails;

	const handleChange = (detailId) => {
		const hotelDetails = displayData.find(
			(detailInfo) => detailInfo.id === detailId
		);
		setShortDetails(hotelDetails || "");
	};

	useEffect(() => {
		handleChange(2);
	}, []);
	return (
		<Container fluid>
			<Row className="d-flex align-items-center pt-5 mt-3">
				<Col md={5} className="pl-5">
					<h1 className="font-weight-bold text-uppercase">{placeName}</h1>
					<p>{shortDescription}</p>
					<Button
						className="px-4"
						variant="danger"
						as={Link}
						to={`/booking/${url}`}
					>
						Start Booking &#187;
					</Button>
				</Col>
				<Col md={7} className="home-md-7">
					{displayData.map((hotel) => (
						<Card key={hotel.id} onClick={() => handleChange(hotel.id)}>
							<Card.Img
								src={hotel.img}
								className={hotel.img === img ? "cardActive" : ""}
							/>
							<Card.Body>
								<Card.Title className="font-weight-bold btn-block w-75 text-white ">
									{hotel.placeName}
								</Card.Title>
							</Card.Body>
						</Card>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
