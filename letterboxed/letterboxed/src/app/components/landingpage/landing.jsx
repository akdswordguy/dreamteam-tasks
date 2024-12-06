"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./landing.module.css";
import logo from "../../images/logo.png";
import secondaryImage from "../../images/frontpage2.png";
import tertiaryImage from "../../images/frontpage3.png";
import glad from "../../images/glad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "../landingpage/MovieCard";
import Card from "../landingpage/cards"; 
import Blog from "../landingpage/blogs";
import FilmPage from "../films/film"

const movies = [
  { image: glad, title: "Gladiator II", views: "4859.9k", likes: "1285.9k" },
  { image: secondaryImage, title: "Avatar", views: "31242.4k", likes: "9248.5k" },
  { image: tertiaryImage, title: "John Wick", views: "1000.7k", likes: "149.4k" },
];

const cardData = [
  { description: "Keep track of every film that you watched" },
  { description: "Create your own personal movie playlist" },
  { description: "Rate and review on different movies" },
  { description: "Write your own personal movie journals" }
];

const blogData = [
  {description: "Lorem Ipsum is simply dummy text of the printing and."},
  {description: "the movie called avengers was sooo great and i got asooo damn inspiredef   nhafjhfwkjfjabnbde asfnhfnaqf kjafnh bb"},
  {description: "hafhuakjfhajkfb fauhfauf aufhakjfbau feehfaqfjuf qjujkjjk lkwgnw wejlgb gewgn  gwlkjeb g "}
];



const LandingPage = () => {

 


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const [showFilms, setShowFilms] = useState(false); // State to toggle between landing page and films

  if (showFilms) {
    return <FilmPage />; // Render the FilmPage component when the state is true
  }

  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.videoBackground}>
            <source src="/06.12.2024_22.47.03_REC.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      <header className={styles.header}>
        <Image src={logo} alt="Logo" width={150} height={50} />
        <nav className={styles.nav}>
          <a href="#signIn">SIGN IN</a>
          <a href="#createAccount">CREATE ACCOUNT</a>
          <button
            onClick={() => setShowFilms(true)} 
            className={styles.navButton}
          >
            FILMS
          </button>
          <a href="moviePlayList">LISTS</a>
          <a href="members">MEMBERS</a>
        </nav>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" className={styles.input} />
          <button className={styles.button}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.heroSection}>
        
          <div className={styles.heroOverlay}></div>
          
          <div className={styles.heroText}>
           
            <h1>Welcome to Your Movie Universe</h1>
            <p>
              Track films you’ve watched. Save those you want to see. Tell your friends what’s good.
            </p>
            <button className={styles.ctaButton}><b>JOIN US IT'S FREE 😄</b></button>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              image={movie.image}
              title={movie.title}
              views={movie.views}
              likes={movie.likes}
            />
          ))}
        </div>

        <div className={styles.heroText}>
          <h2>FEATURES THAT WE PROVIDE</h2>
          <div className={styles.cardGrid}>
            {cardData.map((card, index) => (
              <Card key={index} description={card.description} />
            ))}
          </div>

          <h2>BLOGS</h2>
          <div className={styles.blogGrid}>
            {blogData.map((blog, index) => (
              <Blog key={index} description={blog.description} />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Letterboxed. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
