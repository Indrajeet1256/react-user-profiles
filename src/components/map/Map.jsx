import React from "react";
import GoogleMapReact from "google-map-react";

const center = { lat: -34.397, lng: 150.644 };

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
	const handleApiLoaded = (map, maps) => {
		// use map and maps objects
	};
	const defaultProps = {
		center: {
			lat: center.lat,
			lng: center.lng,
		},
		zoom: 11,
	};
	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: "AIzaSyCgGod9tVU2AX0H3HYlCeo3Uc0j_8qpF2M" }}
			defaultCenter={defaultProps.center}
			yesIWantToUseGoogleMapApiInternals
			onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
			defaultZoom={11}>
			<AnyReactComponent lat={lat} lng={lng} text="My Marker" />
		</GoogleMapReact>
	);
};

export default Map;
