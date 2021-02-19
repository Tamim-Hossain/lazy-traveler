import { Col, Container, Row } from "react-bootstrap";
import hotelsData from "../../fakeData/hotelsData.json";
import star from "../../icon/star.png";
import Google from "../maps/Google";

const Hotel = () => {
	const img = { width: "270px", height: "185px" };
	const rating = { height: "15px", width: " 16px" };

	return (
		<Container fluid>
			<h2 className="font-weight-bold text-center">Stay in Cox’s Bazar</h2>
			<hr className="w-75" />
			<Row>
				<Col md={8} className="mt-3">
					{hotelsData.map((hotel) => (
						<Row>
							<Col md={5} className="mb-5 pl-5">
								<img
									src={hotel.img}
									alt={hotel.title}
									style={img}
									key={hotel.id}
								/>
							</Col>
							<Col md={7}>
								<h6>
									<strong key={hotel.id}>{hotel.title}</strong>
								</h6>
								<p className="text-secondary">
									{hotel.guests} guests, {hotel.bedrooms} bedrooms, {hotel.beds}{" "}
									beds, {hotel.baths} baths
								</p>
								<p className="text-secondary">{hotel.facility}</p>
								<p className="text-secondary">{hotel.others}</p>
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
							</Col>
						</Row>
					))}
				</Col>
				<Col md={4}>
					<Google />
				</Col>
			</Row>
		</Container>
	);
};

export default Hotel;
