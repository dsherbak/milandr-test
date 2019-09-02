import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MapIcon from '@material-ui/icons/Map';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/index.scss'

export default function({
  activeTab,
  activeDevice,
  devicesData,
  handleTabChange,
  handleDeviceChange,
}) {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <div className='devices__header-left'>
            {activeTab === 'map' ? (
              <div className='devices__legend'>
                <div className='devices__legend-item'>
                  <img className='devices__legend-item-image' src='/icons/gateway.svg' alt=''/>
                  <p>Gateway</p>
                </div>
                <div className='devices__legend-item'>
                  <img className='devices__legend-item-image' src='/icons/sensor.svg' alt=''/>
                  <p>Sensor</p>
                </div>
              </div>
            ) : (
              <FormControl className='devices__select'>
                <Select
                  value={activeDevice}
                  onChange={(e) => {
                    handleDeviceChange(e)
                  }}
                  inputProps={{name: 'device', id:'select-device'}}
                >
                  {devicesData.map(item => {
                    return (
                      <MenuItem value={item} key={item.id}>
                        {item.id}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            )}
          </div>
          <div className='devices__header-tabs'>
            <IconButton
              className={`devices__header-button ${activeTab === 'map' ? 'active' : ''}`}
              color='inherit'
              aria-label='menu'
              onClick={() => {
                handleTabChange('map')
              }}
            >
              <MapIcon />
            </IconButton>
            <IconButton
              className={`devices__header-button ${activeTab === 'sensors' ? 'active' : ''}`}
              color='inherit'
              aria-label='menu'
              onClick={() => {
                handleTabChange('sensors')
              }}
            >
              <AppsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
