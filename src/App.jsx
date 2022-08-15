import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import ProgressBar from './components/ProgressBar';

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [percentage, setPercentage] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date('December 21,2022').getTime();
    const startDate = new Date('August 11,2022').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distanceNow = countDownDate - now;
      const distanceStart = countDownDate - startDate;

      setPercentage(Math.round(((distanceStart - distanceNow) * 100) / distanceStart))


      const days = Math.floor(distanceNow / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distanceNow % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distanceNow % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distanceNow % (60 * 1000)) / 1000);

      if (distanceNow < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <div className="App__info" >
        <h1>Quanto tempo falta para as próximas férias da <span>UTFPR</span> ?</h1>
        <h2>As férias de 2022/2 começam dia 21 de dezembro</h2>
      </div>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <div className="App__info">
        <h2>Nosso progresso está em <span>{percentage}%</span></h2>
        <ProgressBar done={percentage} />
      </div>
    </div>
  );
}

export default App;
