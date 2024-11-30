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
                    MDN Documentation
                  </a>
                </li>
              )}
              {content.links.webdev && (
                <li>
                  <a href={content.links.webdev} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    web.dev Info
                  </a>
                </li>
              )}
              {content.links.youtube && (
                <li>
                  <a href={content.links.youtube} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
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
