import React, { Component } from 'react'

export default class MapContainer extends Component {

  componentDidMount() {
    const L = window.L
    const map = L.map('map').setView([33.040164, -111.426363], 10);
    const devices = this.props.devicesData;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    devices.forEach(item => {
      const icon = L.icon({
        iconUrl: item.type === 'gateway' ? '/icons/gateway.svg' : '/icons/sensor.svg',
        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
      });

      L.marker([item.latLng.lat, item.latLng.lng], {icon: icon}).addTo(map);
    });
  }

  render() {
    return(
      <div className='devices__content'>
        <div id='map' className='devices__map'></div>
      </div>
    )
  }
}
