import React from 'react'
import "./movies.css"
import tv from "../../assets/tv.png"
import video from "../../assets/video.png"
import rectangle from "../../assets/rectangle.png"
import rating from "../../assets/rating.png"
import {AiOutlineHome} from "react-icons/ai"
import {BiCameraMovie} from "react-icons/bi"
import {AiOutlineYoutube} from "react-icons/ai"
import {BsCalendar4Event} from "react-icons/bs"
import {TbLogout} from "react-icons/tb"


const Movies = () => {
  return (
    <div className='mother-container'>
    <div className='left'>
      <div className='tv-wrapper'>
        <img src={tv}  className='tv'/>
        <span>Moviebox</span>
      </div>
      <div className='tv-wrapper'>
        <AiOutlineHome />
        <span>Home</span>
      </div>
      <div className='tv-m-wrapper'>
        <BiCameraMovie />
        <span>Movies</span>
      </div>
      <div className='tv-wrapper'>
        <AiOutlineYoutube/>
        <span>tv Series</span>
      </div>
      <div className='tv-wrapper'>
        <BsCalendar4Event/>
        <span>Upcoming</span>
      </div>
      <div className='tv-card'>
        <span>Play movie quizes and earn free tickets</span>
        <small>50k people are playing now</small>
        <span className='tv-t'>Start playing</span>
      </div>
      <div className='tv-wrapper'>
        <TbLogout/>
        <span>Log out</span>
      </div>
    </div>


    <div className='right'>
      <img src={video}/>
      <div className='sides-wrapper'>
      <div className='l-side'>
        <div className='action'>
          <span>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</span>
          <button >Action</button>
          <button>Drama</button>
        </div>
        <p className='l-text1'>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
        <span className='l-text1'>Director : <span className='sm-t'>Joseph Kosinski</span></span>
        <span className='l-text1'>Writers : <span className='sm-t'> Jim Cash, Jack Epps Jr, Peter Craig</span></span>
        <span className='l-text1'>Writers : <span className='sm-t'>Jim Cash, Jack Epps Jr, Peter Craig</span></span>
        <div className='side-btn'>
          <button>Top rated movie #65</button>
          <input type="text" placeholder='Awards 9 nominations' />
        </div>

      </div>

      <div className='r-side'>
        <div className='rating'>
          <img src={rating} alt="" className='ratingImg'/>
        </div>
        <button className='r-side-btn'>See showtimes</button>
        <button className='r-side-btn1'>more watch options</button>
       <img src={rectangle} alt="" className='rectImg'/>
      </div>
    </div>
    </div>
 </div>
  )
}

export default Movies