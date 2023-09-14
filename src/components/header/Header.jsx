import React from 'react'
import "./header.css"
import tv from "../../assets/tv.png"
import Menu from "../../assets/Menu.png"
// import {BiSearch} from "react-icons/bi"
import imd from "../../assets/imd.png"
import apple from "../../assets/apple.png"
import Button from "../../assets/Button.png"
import MovieSearch from '../movieSearch/MovieSearch'


const Header = () => {
  return (
    <div className='header-section'>
        <div className="sub-section">
         <div className='container'>
        <div className='logo'>
          <img src={tv} className='tv'/>
          <span className='mvbox'>MovieBox</span>
        </div>
        <MovieSearch/>
        {/* <div className='search-icon'>
          <form action="" className='input-form'>
           
          <input type="text" placeholder="what do you want to watch? " className='input-text' />
          </form>
          <BiSearch className='input-icon'/>
          </div> */}
        <div className='menu'>
            <span className='text'>sign in</span>
            <img src={Menu} className='icon'/>
        </div>
        </div>
        <div className='heade-title'>
            <h2>Jon Wick 3: Parabellum</h2>
            <div className='apple-container'>
                <span className='imd-con'>
                    <img src={imd} className='imd'/>
                    <span>B6.0/100</span>
                </span>
                <span className='apple-con'>
                    <img src={apple} className='apple'/>
                    <span>97%</span>
                </span>
            </div>
            <p>John wick is on the run after killing a member of the international assasins guide and with a $14 million price tag on his head. He is the target of the hit men and women everywhere </p>
            <img src={Button} className='btn'/>
           </div>
        </div>
    </div>
  )
}

export default Header