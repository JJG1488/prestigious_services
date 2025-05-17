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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376610.8686588484!2d-83.04864040000001!3d42.48576095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2eb57a36cf0b25cd%3A0xbb0cc1e7f419c7b3!2sPointe%20Roofing%20Improvements!5e0!3m2!1sen!2sus!4v1742956025116!5m2!1sen!2sus"
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
