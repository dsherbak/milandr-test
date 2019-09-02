import React from 'react'
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import OpacityIcon from '@material-ui/icons/Opacity';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

export default function({
  activeDevice
}) {
  return(
    <div className='devices__content devices__sensors'>
      {activeDevice.sensors.map((item, index) => {
        return (
          <div className='devices__widget'>
            <div className='devices__widget-icon'>
              {item.type === 'battery' && (
                <BatteryChargingFullIcon />
              )}
              {item.type === 'humidity' && (
                <OpacityIcon />
              )}
              {item.type === 'temperature' && (
                <BrightnessHighIcon />
              )}
            </div>
            <div className='devices__widget-value'>{item.value} {item.type === 'temperature' ? 'F' : '%'}</div>
          </div>
        )
      })}
    </div>
  )
}
