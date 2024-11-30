import React from 'react';
import styles from './Inspector.module.css';
import { DayContent } from '../../data/advent-content';

interface InspectorProps {
  isOpen: boolean;
  content?: DayContent;
  onClose: () => void;
}

export const Inspector: React.FC<InspectorProps> = ({ isOpen, content, onClose }) => {
  if (!isOpen || !content) return null;

  return (
    <div className={`${styles.inspector} ${isOpen ? styles.active : ''}`}>
      <div className={styles.closeButton} onClick={onClose}>×</div>
      <div className={styles.content}>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        {content.code && (
          <>
            <p>Example:</p>
            <pre><code>{content.code}</code></pre>
          </>
        )}
        <div className={styles.browserSupport}>
          <h3>Browser Support</h3>
          <ul>
            <li>Chrome: {content.browserSupport.chrome}</li>
            <li>Firefox: {content.browserSupport.firefox}</li>
            <li>Safari: {content.browserSupport.safari}</li>
            <li>Edge: {content.browserSupport.edge}</li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>Learn More</h3>
          <ul>
            {content.links.mdn && (
              <li><a href={content.links.mdn} target="_blank" rel="noopener noreferrer">MDN Documentation</a></li>
            )}
            {content.links.chrome && (
              <li><a href={content.links.chrome} target="_blank" rel="noopener noreferrer">Chrome Developers</a></li>
            )}
            {content.links.youtube && (
              <li><a href={content.links.youtube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
