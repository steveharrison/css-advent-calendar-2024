import React, { useEffect } from 'react';
import styles from './Inspector.module.css';
import { DayContent } from '../../data/advent-content';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-css';

interface InspectorProps {
  isOpen: boolean;
  content?: DayContent;
  onClose: () => void;
}

export const Inspector: React.FC<InspectorProps> = ({ isOpen, content, onClose }) => {
  useEffect(() => {
    if (content?.code) {
      Prism.highlightAll();
    }
  }, [content]);

  if (!isOpen || !content) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.closeButton} onClick={onClose}>+</div>
      <div className={`${styles.inspector} ${isOpen ? styles.active : ''}`}>
        <div className={styles.content}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          {content.code && (
            <>
              <p>Example:</p>
              <pre className={styles.codeBlock}>
                <code className="language-css">{content.code}</code>
              </pre>
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
                <li>
                  <a href={content.links.mdn} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 2.5H11.5L13.5 4.5V13.5H2.5V2.5H4.5Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 6.5H11M5 9.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    MDN Documentation
                  </a>
                </li>
              )}
              {content.links.webdev && (
                <li>
                  <a href={content.links.webdev} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 2.5H11.5L13.5 4.5V13.5H2.5V2.5H4.5Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 6.5H11M5 9.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    web.dev / Chrome Developers Article
                  </a>
                </li>
              )}
              {content.links.youtube && (
                <li>
                  <a href={content.links.youtube} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Watch on YouTube
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
