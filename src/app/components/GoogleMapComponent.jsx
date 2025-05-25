import React, { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";
import Spinner from "./Spinner";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// const refreshPage = () => {
//   window.location.reload(false);
// };
const renderMapStatus = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <GoogleMapComponent />;
    default:
      return <GoogleMapComponent />;
  }
};
export const GoogleMapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;

  const renderMap = useMemo(() => {
    const mapContainerStyle = {
      // height: "300px",
      height: "100%",
      width: "100%",
      borderRadius: "12px",
    };

    const center = {
      lat: 42.395025,
      lng: -82.922345,
    };

    const mapOptions = {
      zoom: 13,
    };

    if (!apiKey) {
      return null; // Return null if API key is not available
    }

    return (
      // <LoadScript>

      <Wrapper apiKey={apiKey} render={renderMapStatus}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={mapOptions.zoom}
        >
          <iframe
            src="https://www.google.com/maps/place/42%C2%B026'47.7%22N+83%C2%B007'30.3%22W/@42.4465699,-83.1293371,17z/data=!3m1!4b1!4m13!1m8!3m7!1s0x8824c9630f83a945:0x8b181fb1382919da!2sW+Seven+Mile+Rd,+Detroit,+MI!3b1!8m2!3d42.4320572!4d-83.1207058!16s%2Fg%2F1q69m950z!3m3!8m2!3d42.44657!4d-83.125082?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Add map markers, polygons, or other map components here */}
        </GoogleMap>
      </Wrapper>

      // </LoadScript>
    );
  }, [apiKey]);

  return <div id="map">{renderMap}</div>;
};

export default GoogleMapComponent;
