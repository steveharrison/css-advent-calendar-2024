import React from 'react';
import styles from './Day.module.css';

interface DayProps {
  number: number;
  isSelected: boolean;
  onClick: (day: number) => void;
}

export const Day: React.FC<DayProps> = ({ number, isSelected, onClick }) => {
  function handleClick() {
    if (number > 24) return;
    onClick(number);
  }
  
  return (
    <div 
      className={`${styles.day} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      {number}
    </div>
  );
};
