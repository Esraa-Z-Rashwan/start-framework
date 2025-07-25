import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={`${styles.notFoundContainer} d-flex flex-column justify-content-center align-items-center text-white text-center`}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.message}>The page you are looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-outline-light mt-3">Go Home</Link>
    </div>
  );
}