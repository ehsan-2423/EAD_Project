import React, { useState, useEffect } from "react";
import './MovieApp.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from 'axios';

function MovieApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [expandedMovieId, setExpandedMovieId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); // New state to control favorites panel visibility




  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        {
          params: {
            api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
          },
        }
      );
      setGenres(response.data.genres);
    };
    fetchGenres();
  }, []);







  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
          params: {
            api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
            sort_by: sortBy,
            page: 1,
            with_genres: selectedGenre,
            query: searchQuery,
          },
        }
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [searchQuery, sortBy, selectedGenre]);







  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };






  const handleSearchSubmit = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
          query: searchQuery,
        },
      }
    );
    setMovies(response.data.results);
  };





  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };





  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };





  const toggleDescription = (movieId) => {
    setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
  };




  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };



  const isFavorite = (movieId) => favorites.some(movie => movie.id === movieId);

  function handleKeyDown(e){
    if(e.key==="Enter"){
      handleSearchSubmit()
      
    }
    

  }


  return (
    <div id="home">
      <header className="header" >
        <a href="#home" className="logo">Movie Cinema</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
            onKeyDown={(e)=>handleKeyDown(e)}
          />
          <button onClick={handleSearchSubmit} className="search-button">
            <AiOutlineSearch />
          </button>
        </div>
        <nav className="navi">
          <a href="#home">Home</a>
          <a href="#footer">About Us</a>
          {/* <a href="#">Contact</a> */}
          <a
            href="#favorites"
            className="favorites-link"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            Favorites
          </a>
        </nav>
      </header>



      <div className="filters" id="filters">
        <label htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
        </select>
        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>






      <div className="movie-wrapper">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p className="rating">Rating: {movie.vote_average}</p>
            {expandedMovieId === movie.id ? (
              <p>{movie.overview}</p>
            ) : (
              <p>{movie.overview.substring(0, 50)}...</p>
            )}
            <button
              onClick={() => toggleDescription(movie.id)}
              className="read-more"
            >
              {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
            </button>
            <button  className="favButton"  onClick={() => toggleFavorite(movie) }>
              {isFavorite(movie.id) ? <MdFavorite className="favIcon" color="red" /> : <MdFavoriteBorder  className="favIcon"/>}
            </button>
          </div>
        ))}
      </div>

      {showFavorites && (
        <div id="favorites" className="favorites-panel">
          <h2>Favorites</h2> 
          {favorites.length === 0 ? (
            <p>No favorites added yet!</p>
          ) : (
            favorites.map((movie) => (
              <div key={movie.id} className="favorite-movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <button onClick={() => toggleFavorite(movie)}>Remove</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
