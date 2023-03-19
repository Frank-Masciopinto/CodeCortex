import React from 'react'

const GoogleMap = () => {
  return (
    <>
      <div className="container ptb-100">
        <div className="map-location">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196869.7607665965!2d-120.13792293586711!3d39.55757791109622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940ae9292a09d%3A0x40c5c5ce7438f787!2sReno%2C%20NV%2C%20USA!5e0!3m2!1sen!2smy!4v1679186186187!5m2!1sen!2smy" 
            width="100%" 
            height="450" 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default GoogleMap
