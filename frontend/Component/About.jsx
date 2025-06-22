import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentStyling/About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-hero">
      <div className="about-overlay">
        <button className="about-back" onClick={() => navigate(-1)}>← Back</button>
        <div className="about-content">
          <h1>Welcome to Movie Cinema</h1>
          <p>Your gateway to a world of entertainment.</p>
        </div>
      </div>

      <div className="about-section">
        <h2>Discover Movies</h2>
        <p>
          Browse trending, top-rated, and newly released movies across all genres. 
          Powered by TMDb API, we bring you the latest and most accurate movie data.
        </p>
      </div>

      <div className="about-section">
        <h2>Smart Search & Filters</h2>
        <p>
          Search any movie by name, filter by genre, or sort by popularity, rating, or release date.
          Find exactly what you’re in the mood for — instantly.
        </p>
      </div>

      <div className="about-section">
        <h2>Favorites Collection</h2>
        <p>
          Love a movie? Add it to your favorites and build your own collection of must-watch titles.
        </p>
      </div>

      <div className="about-footer">
        <p>Made with ❤️ for movie lovers. © 2025 Movie Cinema</p>
      </div>
    </div>
  );
}

export default About;
