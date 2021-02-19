import { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Google extends Component {
	static defaultProps = {
		center: {
			lat: 21.42,
			lng: 91.97,
		},
		zoom: 10,
	};

	render() {
		return (
			<div
				style={{
					height: "100vh",
					width: "100%",
					paddingRight: "55px",
				}}
			>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyDdYAkgQ7sqS-w2sXhRlLnbeJPtg2O6qcQ" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent lat={21.4262361} lng={91.9761634} />
				</GoogleMapReact>
			</div>
		);
	}
}

export default Google;
