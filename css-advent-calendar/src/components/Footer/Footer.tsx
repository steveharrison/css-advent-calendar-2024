import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a 
        href="https://steveharrison.dev" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.link}
      >
        Made by Steve
      </a>
    </footer>
  );
};
