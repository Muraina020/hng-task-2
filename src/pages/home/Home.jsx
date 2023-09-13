import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Card from '../../components/cards/Card'


const Home = () => {
  return (
    <div className='section'>
    <div className='header'>
    <Header/>
     </div>
     <div className='movie'>
     <Card/>
     </div>
    </div>
  )
}

export default Home