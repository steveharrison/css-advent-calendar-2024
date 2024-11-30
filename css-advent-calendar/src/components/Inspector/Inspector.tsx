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
      </div>
    </div>
  );
};
