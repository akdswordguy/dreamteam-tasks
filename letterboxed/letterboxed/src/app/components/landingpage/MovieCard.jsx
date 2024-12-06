import React from 'react';
import Image from 'next/image';
import styles from './movieCards.module.css';

const MovieCard = ({ image, title, views, likes }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles.image} layout="fill" />
      <div className={styles.overlay}>
        <div className={styles.stats}>
          <div className={styles.views}>👁️ {views}</div>
          <div className={styles.likes}>❤️ {likes}</div>
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default MovieCard;
