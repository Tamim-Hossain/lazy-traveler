import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
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
		<Row>
			<Col md={5}>
				<h1>{placeName}</h1>
				<p>{shortDescription}</p>
				<Button variant="warning" as={Link} to={`/booking/${url}`}>
					Booking <AiOutlineArrowRight />
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
							<Card.Title>{hotel.placeName}</Card.Title>
						</Card.Body>
					</Card>
				))}
			</Col>
		</Row>
	);
};

export default Main;
