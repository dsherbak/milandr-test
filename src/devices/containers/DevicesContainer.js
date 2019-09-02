import React, { Component } from 'react'

import DevicesHeader from '../components/DevicesHeader'
import MapContainer from './MapContainer'
import Sensors from '../components/Sensors'
import devicesData from '../devicesData'

import '../styles/index.scss'

export default class DevicesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'map',
      activeDevice: devicesData[0],
      devicesData
    };

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleDeviceChange = this.handleDeviceChange.bind(this);
  }

  handleTabChange(tab) {
    this.setState({
      activeTab: tab
    })
  }

  handleDeviceChange(e) {
    this.setState({
      activeDevice: e.target.value
    })
  }

  render() {
    const { activeTab, activeDevice } = this.state;

    return(
      <div>
        <DevicesHeader
          activeTab={activeTab}
          activeDevice={activeDevice}
          devicesData={devicesData}
          handleTabChange={this.handleTabChange}
          handleDeviceChange={this.handleDeviceChange}

        />
        {this.state.activeTab === 'map' ? (
          <MapContainer devicesData={devicesData} />
        ) : (
          <Sensors activeDevice={activeDevice} />
        )}
      </div>
    )
  }
}
