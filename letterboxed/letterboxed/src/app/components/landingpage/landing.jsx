"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./landing.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logo.png";
import secondaryImage from "../../images/frontpage2.png";
import tertiaryImage from "../../images/frontpage3.png";
import glad from "../../images/glad.png";

import MovieCard from "../landingpage/MovieCard";
import Card from "../landingpage/cards";
import Blog from "../landingpage/blogs";
import FilmPage from "../films/film";
import UserLanding from "../userlanding/userlanding"; 
const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilms, setShowFilms] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showUserLanding, setShowUserLanding] = useState(false); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const movies = [
    { image: glad, title: "Gladiator II", views: "4859.9k", likes: "1285.9k" },
    { image: secondaryImage, title: "Avatar", views: "31242.4k", likes: "9248.5k" },
    { image: tertiaryImage, title: "John Wick", views: "1000.7k", likes: "149.4k" },
  ];

  const cardData = [
    { description: "Keep track of every film that you watched" },
    { description: "Create your own personal movie playlist" },
    { description: "Rate and review on different movies" },
    { description: "Write your own personal movie journals" },
  ];

  const blogData = [
    { description: "Lorem Ipsum is simply dummy text of the printing and." },
    { description: "The movie called Avengers was so great, and it inspired me!" },
    { description: "Write your thoughts, your experiences, and your movie stories." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCreateAccount = async () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/create-account", {
        username: formData.username,
        password: formData.password,
      });
      toast.success(res.data.message);
      setShowCreateAccount(false);
      setShowUserLanding(true); 
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong!");
    }
  };

  const handleSignIn = async () => {
    try {
        const res = await axios.post("http://localhost:5000/api/sign-in", {
        username: formData.username,
        password: formData.password,
      });
      toast.success("Signed in successfully!");
      localStorage.setItem("username", formData.username);
      setShowSignIn(false);
      setShowUserLanding(true);
    } catch (err) {
      toast.error(err.response?.data?.error || "Invalid credentials!");
    }
  };

  if (showFilms) {
    return <FilmPage />;
  }

  if (showUserLanding) {
    return <UserLanding />; 
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/06.12.2024_22.47.03_REC.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className={styles.header}>
        <Image src={logo} alt="Logo" width={150} height={50} />
        <nav className={styles.nav}>
          <a href="#signIn" onClick={(e) => {
              e.preventDefault();
              setShowSignIn(true);
            }}
          >
            SIGN IN
          </a>
          <button onClick={() => setShowCreateAccount(true)} className={styles.navButton}>
            CREATE ACCOUNT
          </button>
          <button onClick={() => setShowFilms(true)} className={styles.navButton}>
            FILMS
          </button>
        </nav>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" className={styles.input} />
          <button className={styles.button}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.Text}>
          <h1>Welcome to Your Movie Universe</h1>
          <button
            className={styles.signinButton}
            onClick={() => setShowCreateAccount(true)}
          >
            JOIN US, IT'S FREE
          </button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>

        <div className={styles.Text}>
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

      {showCreateAccount && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <h2>Create Account</h2>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            <button onClick={handleCreateAccount} className={styles.signinButton}>
              Create Account
            </button>
            <button
              onClick={() => setShowCreateAccount(false)}
              className={styles.closeButton}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showSignIn && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <h2>Sign In</h2>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button onClick={handleSignIn} className={styles.signinButton}>
              Sign In
            </button>
            <button
              onClick={() => setShowSignIn(false)}
              className={styles.closeButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
