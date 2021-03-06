import React, { Component } from 'react';

import { getLocations } from './API/getLocations';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


import './App.css';


class BerlinLocations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locations: null
    }
  }

  componentDidMount() {
    getLocations().then(data => {
      const berlinData = data.filter(loc => {
        return loc.AddressInfo.Town === "Berlin"
      })
      this.setState({locations: berlinData})
    })
  }

  render() {
    const { locations } = this.state;
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 52.5200, lng: 13.4050}}
        >
        {locations && locations.map(location => (
          <Marker key={location.ID} position={{ lat: location.AddressInfo.Latitude, lng: location.AddressInfo.Longitude }} />
        ))}
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAr38yriJlZDsY_AUErEsiOQuhV34udfGQ'
})(BerlinLocations);


