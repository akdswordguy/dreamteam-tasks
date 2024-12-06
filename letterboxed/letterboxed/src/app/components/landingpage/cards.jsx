"use client";
import React from "react";
import styles from "../landingpage/cards.module.css";

const Card = ({ description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
