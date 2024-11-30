import React, { useState } from 'react';
import styles from './App.module.css';
import { Day } from './components/Day/Day';
import { Inspector } from './components/Inspector/Inspector';
import { adventContent } from './data/advent-content';

function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const handleClose = () => {
    setSelectedDay(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.gridContainer}>
        {Array.from({ length: 24 }, (_, i) => i + 1).map(day => (
          <Day
            key={day}
            number={day}
            isSelected={selectedDay === day}
            onClick={handleDayClick}
          />
        ))}
      </div>
      <Inspector
        isOpen={selectedDay !== null}
        content={selectedDay ? adventContent[selectedDay] : undefined}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
