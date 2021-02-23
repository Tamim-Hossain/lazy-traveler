import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMaps = () => {
	const mapStyles = {
		height: "100vh",
		width: "100%",
	};

	const defaultCenter = {
		lat: 21.42,
		lng: 91.97,
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyCTd0r6d7vp0osQb6y7Urt4Ot5lysB98i8">
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={13}
				center={defaultCenter}
			/>
		</LoadScript>
	);
};

export default GoogleMaps;
