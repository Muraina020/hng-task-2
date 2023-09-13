import React from 'react'
import "./card.css"
import {MdNavigateNext} from "react-icons/md"
import Poster1 from "../../assets/Poster1.png"
import Poster2 from "../../assets/Poster2.png"
import Poster3 from "../../assets/Poster3.png"
import Poster4 from "../../assets/Poster4.png"
import Poster5 from "../../assets/Poster5.png"
import Poster6 from "../../assets/Poster6.png"
import Poster7 from "../../assets/Poster7.png"
import Poster8 from "../../assets/Poster8.png"
import imd from "../../assets/imd.png"
import apple from "../../assets/apple.png"
import facebk from "../../assets/facebk.png"
import insta from "../../assets/insta.png"
import twi from "../../assets/twi.png"
import youtube from "../../assets/youtube.png"

const cards = [
    {
      id: 1,
      url: Poster1,
      text: "USA 2016, current",
      title: "Stranger Things",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "86.0/100",
      appleUrl: apple,
      text2: "97%",
      text3: "Action, adventure Horrior"
    },
    {
      id: 2,
      url: Poster2,
      text: "USA 2005",
      title: "Botsman Begins",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "82.0/100",
      appleUrl: apple,
      text2: "70%",
      text3: "Action, adventure"
    },
    {
      id: 3,
      url: Poster3,
      text: "USA 2018",
      title: "Spider-Man: Into The Spider Verse",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "84.0/100",
      appleUrl: apple,
      text2: "78%",
      text3: "Animation, Action, adventure"
    },
    {
      id: 4,
      url: Poster4,
      text: "USA 2017",
      title: "Dunkirk",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "86.0/100",
      appleUrl: apple,
      text2: "94%",
      text3: "Animation, Drama, History"
    },
    
    {
      id: 5,
      url: Poster5,
      text: "USA 2021",
      title: "Dune",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "84.0/100",
      appleUrl: apple,
      text2: "75%",
      text3: "Animation, Adventure, Drama"
    },
    {
      id: 6,
      url: Poster6,
      text: "USA 2021",
      title: "No Time To Die",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "76.0/100",
      appleUrl: apple,
      text2: "68%",
      text3: "Action, Adventure, Fantacy"
    },
    {
        id: 7,
        url: Poster7,
        text: "USA 2021",
        title: "Shang-Chi and the Legend of the Ten Rings",
        alt: "awardImageOne.jpg",
        imdUrl: imd,
        text1: "76.0/100",
        appleUrl: apple,
        text2: "71%",
        text3: "Animation, Adventure, Thriller"
      },
    {
      id: 8,
      url: Poster8,
      text: "USA 2021",
      title: "Don't Breathe 2",
      alt: "awardImageOne.jpg",
      imdUrl: imd,
      text1: "64.0/100",
      appleUrl: apple,
      text2: "46%",
      text3: "Action, Drama, Horror"
    },
    
    {
        id: 5,
        url: Poster5,
        text: "USA 2021",
        title: "Dune",
        alt: "awardImageOne.jpg",
        imdUrl: imd,
        text1: "84.0/100",
        appleUrl: apple,
        text2: "75%",
        text3: "Animation, Adventure, Drama"
      },
      {
        id: 6,
        url: Poster6,
        text: "USA 2021",
        title: "No Time To Die",
        alt: "awardImageOne.jpg",
        imdUrl: imd,
        text1: "76.0/100",
        appleUrl: apple,
        text2: "68%",
        text3: "Action, Adventure, Fantacy"
      },
      {
          id: 7,
          url: Poster7,
          text: "USA 2021",
          title: "Shang-Chi and the Legend of the Ten Rings",
          alt: "awardImageOne.jpg",
          imdUrl: imd,
          text1: "76.0/100",
          appleUrl: apple,
          text2: "71%",
          text3: "Animation, Adventure, Thriller"
        },
      {
        id: 8,
        url: Poster8,
        text: "USA 2021",
        title: "Don't Breathe 2",
        alt: "awardImageOne.jpg",
        imdUrl: imd,
        text1: "64.0/100",
        appleUrl: apple,
        text2: "46%",
        text3: "Action, Drama, Horror"
      },
    
  ];

const Card = () => {
  return (
    <div className='movies'>
        <div className='featured'>
            <h2>Featured Movies</h2>
            <span>see all <MdNavigateNext/></span>
        </div>
    <div className='movies-container'>
    {cards.map((card, i) => (
    <div className='movie-card' key={card.id} data-testid='movie-card'>
    <img
      src={card.url} // Use the 'posterUrl' property
      alt={card.title}
      data-testid='movie-poster'
      className='movieImg'
    />
    
    <div className='movie-info'>
    <p data-testid='movie-release-date' className='movie-date'>{card.text}</p>
      <h2 data-testid='movie-title' className='cardTitle'>{card.title}</h2>
    </div>
    {/* Include other movie information as needed */}
    <div className='apple-con'>
                <span className='imd-con'>
                    <img src={card.imdUrl} className='imd'/>
                    <span>{card.text1}</span>
                </span>
                <span className='apple-con'>
                    <img src={card.appleUrl} className='apple'/>
                    <span>{card.text2}</span>
                </span>
            </div>
            <p data-testid='movie-release-date' className='movie-date'>{card.text3}</p>
  </div>

    ))}
  </div>

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
  </div>
  )
}

export default Card