import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MovieGrid from '../../components/movieGrid/MovieGrid'
// import MovieSearch from '../../components/movieSearch/MovieSearch'


const Home = () => {
  return (
    <div className='section'>
   <Header/>
   {/* <MovieSearch/> */}
   <MovieGrid/>
   <Footer/>
 </div>
  )
}

export default Home