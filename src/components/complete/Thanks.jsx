import { useEffect } from "react";

const Thanks = () => {
	useEffect(() => {
		document.title = "Lazy Traveler";
	});
	return (
		<p className="display-4 font-weight-bold d-flex justify-content-center text-info mt-5">
			Booking Completed Successfully.
		</p>
	);
};

export default Thanks;
