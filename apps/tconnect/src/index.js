import React from "react";
import { render } from "react-dom";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import Geolocation from "./map/Geolocation.js";
import MenuAppBar from "./MenuAppBar.js";
import FooterPage from"./FooterPage.js";

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBCjRATFXVKE_NDxkaUQSweKlNymn6xMrA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(48.4148554, 2.729),
          destination: new google.maps.LatLng(48.4148554, 2.7215244999999997),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(48.4148554, 2.7215244999999997)}
  >
  

    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Location"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>

    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

const App = () => (
  <div>
   
    <MenuAppBar/>
    <h2>Boostez votre mobilité</h2>
      <MapWithADirectionsRenderer />
      <Geolocation/>

<FooterPage/>
    <footer>
  <p> powerd by Tchuindem ouahouo technology services </p>
    </footer>
  </div>
);

render(<App />, document.getElementById("root"));
