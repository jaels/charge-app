import React, { Component } from 'react';

import Location from './Location';

import { getLocations } from './API/getLocations';

import { Map, GoogleApiWrapper } from 'google-maps-react';


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
      console.log(berlinData);
      this.setState({locations: berlinData})
    })
  }

  render() {
    const { locations } = this.state;
    return (
      <div className="wrapper">
      <div id="map">
        <Map
          google={this.props.google}
          zoom={8}
          // style={mapStyles}
          initialCenter={{ lat: 52.5200, lng: 13.4050}}

        >
        {locations && locations.map(location => (
        <Location key={location.ID} lat={location.AddressInfo.Latitude} lng={location.AddressInfo.Longitude}/>

        ))}
          </Map>
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAr38yriJlZDsY_AUErEsiOQuhV34udfGQ'
})(BerlinLocations);


