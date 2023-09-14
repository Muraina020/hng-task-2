import axios from 'axios';
import "./movieGrid.css"
import imd from "../../assets/imd.png"
import apple from "../../assets/apple.png"
import React, { useState, useEffect } from 'react';

// MovieCard component
const MovieCard = ({ movie }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original';

  return (
    <div data-testid="movie-card" className='poster'>
      <img
        src={imagePath + movie.poster_path}
        alt={movie.title}
        data-testid="movie-poster"
        className='posterImg'
      />
      <p data-testid="movie-title">{movie.title}</p>
      <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
      <div className='apple-containerr'>
                <span className='imd-con'>
                    <img src={imd} className='imd'/>
                    <span>B6.0/100</span>
                </span>
                <span className='apple-con'>
                    <img src={apple} className='apple'/>
                    <span>97%</span>
                </span>
            </div>
    </div>
  );
};

// MovieGrid component
const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API key and endpoint
    const apiKey = '17e05b8138c713724178ae4dce04207f';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching popular movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* <h1>Top 10 Movies</h1> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {movies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
