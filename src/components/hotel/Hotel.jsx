import { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import hotelsData from "../../fakeData/hotelsData.json";
import star from "../../icon/star.png";
import GoogleMaps from "../maps/GoogleMaps";

const Hotel = () => {
	const [, , bookingInfo] = useContext(UserContext);
	const { destination } = bookingInfo;

	useEffect(() => {
		document.title = "Hotel | Lazy Traveler";
	});

	const img = { width: "270px", height: "185px" };
	const rating = { height: "15px", width: " 16px" };

	return (
		<Container fluid>
			<h2 className="font-weight-bold text-center">Stay in {bookingInfo.destination}</h2>
			<hr className="w-75" />
			<Row>
				<Col md={8} className="mt-3">
					{hotelsData.map((hotel) => (
						<Row className="mb-5 pl-5">
							<div>
								<img src={hotel.img} alt={hotel.title} style={img} key={hotel.id} />
							</div>
							<div className="ml-4">
								<h6>
									<strong key={hotel.id}>{hotel.title}</strong>
								</h6>
								<p className="text-secondary">
									{hotel.guests} guests, {hotel.bedrooms} bedrooms, {hotel.beds} beds, {hotel.baths} baths
								</p>
								<p className="text-secondary">{hotel.facility}</p>
								<p>
									<strong>
										{" "}
										<img src={star} alt="" style={rating} />
										{hotel.rating}({hotel.totalRating}) ${hotel.cost}/
									</strong>
									night{" "}
									<span className="text-secondary">
										<strong>{hotel.totalCost}</strong> total
									</span>
								</p>
								<Button variant="danger" className="px-4" as={Link} to="/review-booking">
									Book Now &#187;
								</Button>
							</div>
						</Row>
					))}
				</Col>
				<Col md={4}>
					<GoogleMaps destination={destination} />
				</Col>
			</Row>
		</Container>
	);
};

export default Hotel;
