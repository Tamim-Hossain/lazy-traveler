import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const GoogleMaps = ({ destination }) => {
	const [Center, setCenter] = useState({});

	const mapStyles = {
		height: "100vh",
		width: "100%",
	};

	useEffect(() => {
		switch (destination) {
			case "Cox's Bazar":
				setCenter({ lat: 21.42, lng: 91.97 });
				break;
			case "Sreemangal":
				setCenter({ lat: 24.31, lng: 91.72 });
				break;
			case "Sundarban":
				setCenter({ lat: 22.58, lng: 88.32 });
				break;
			default:
				break;
		}
	}, [destination]);

	return (
		<LoadScript googleMapsApiKey="AIzaSyCTd0r6d7vp0osQb6y7Urt4Ot5lysB98i8">
			<GoogleMap mapContainerStyle={mapStyles} zoom={13} center={Center} />
		</LoadScript>
	);
};

export default GoogleMaps;
