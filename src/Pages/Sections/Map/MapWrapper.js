import React, { Component } from "react";

import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "63vh",
};

const locations = {
  name: "Location 1",
  location: {
    lat: 41.3954,
    lng: 2.162,
  },
};
export class MapWrapper extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      >
        <Marker key={locations.name} position={locations.location} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBalF5BzA6yxlqyGSwxMUHGrwdPJT-lkIw",
})(MapWrapper);
