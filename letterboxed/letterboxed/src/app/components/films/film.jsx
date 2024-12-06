"use client";
import React, { useEffect, useState } from "react";
import styles from "./film.module.css";

const apiKey = "3d1cb94d909aab088231f5af899dffdc";

const FilmPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  // Handle removing a movie card
  const handleRemoveMovie = (movieId) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  };

  // Render movie cards
  const renderMovies = () => {
    if (error) {
      return <div className={styles.error}>Error: {error}</div>;
    }

    if (!movies.length) {
      return <div className={styles.loading}>Loading movies...</div>;
    }

    return movies.map((movie) => (
      <div key={movie.id} className={`${styles.movieCard} card`}>
       
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : "https://via.placeholder.com/200"
          }
          alt={`${movie.title} Poster`}
          className="card-img-top"
          onClick={() => setSelectedMovie(movie)}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Release Date: {movie.release_date}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <div className={styles.movieGrid}>{renderMovies()}</div>

      {/* Modal for displaying movie details */}
      {selectedMovie && (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <button
        className={styles.modalCloseButton}
        onClick={() => setSelectedMovie(null)}
      >
        ✕
      </button>
      <h2>{selectedMovie.title}</h2>
      <p>Overview: {selectedMovie.overview}</p>
      <p>Release Date: {selectedMovie.release_date}</p>
      <p>Vote Average: {selectedMovie.vote_average}</p>
      <p>Popularity: {selectedMovie.popularity}</p>
      <button onClick={() => setSelectedMovie(null)}></button>
    </div>
  </div>
)};
    </div>
  );
};

export default FilmPage;
