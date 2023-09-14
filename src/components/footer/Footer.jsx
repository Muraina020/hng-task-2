import React from 'react'
import "./footer.css"
import facebk from "../../assets/facebk.png"
import insta from "../../assets/insta.png"
import twi from "../../assets/twi.png"
import youtube from "../../assets/youtube.png"

const Footer = () => {
  return (
    <div className='footer'>
    <div className='socio'>
      <img src={facebk} />
      <img src={insta} />
      <img src={twi} />
      <img src={youtube} />
    </div>
    <div className='policy'>
      <span>Condition of use</span>
      <span>Privacy & Policy</span>
      <span>Press Room</span>
    </div>
    <p className='footer-text'>© 2021 MovieBox by Adriana Eka Prayudha</p>
</div>
  )
}

export default Footer