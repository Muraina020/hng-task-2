import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BiSearch} from "react-icons/bi"
import "./movieSearch.css"

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      const apiKey = '17e05b8138c713724178ae4dce04207f';
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setSearchResults(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='M-search'>
      {/* <h2>Movie Search</h2> */}
      <div className='search-icon'>
      <input
        type="text"
        placeholder="Search for a movie..."
        className='input-text'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <BiSearch className='input-icon'/>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="search-result-poster"
              />
              <p className="search-result-title">{movie.title}</p>
              <p className="search-result-release-date">
                Release Date: {movie.release_date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
