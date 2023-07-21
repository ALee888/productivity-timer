import React, { useState, useEffect } from 'react';

function TaskTimer() {
    
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [live, setLive] = useState(false);
    
    const tick = () => {
      // Increment seconds
      setSeconds((secondsTime) => {
        const newSeconds = secondsTime + 1;
        if (newSeconds === 3) {
          // Reset seconds to 0
          setSeconds(0)
          // Updating minute
          setMinutes((minutesTime) => {
            const newMinutes = minutesTime + 1;
            if (newMinutes === 2) {
              setMinutes(0)
              setHours((hoursTime) => { 
                const newHours = hoursTime + 1;
                if (newHours === 100) {
                  setLive(false);
                  return hours;
                }
                return newHours;
              });
            }
            return newMinutes;
          });
        }
        // Otherwise return
        return newSeconds;
      });
    }
    useEffect(() => {
      let intervalId;
  
      // Clock
      if (live) {
        intervalId = setInterval(() => {
          tick();
        }, 1000);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    });
    
    const startTime = () => {
      setLive(true);
    };
  
    const breakTime = () => {
      setLive(false);
    };

    const getTimeString = () => {
      let timeStr = ""
      if (hours < 10) {
        timeStr = "0" + hours;
      } else {
        timeStr += hours
      }
      if (minutes < 10) {
        timeStr = timeStr + ':0' + minutes;
      } else {
        timeStr = timeStr + ":" + minutes;
      }
      if (seconds < 10) {
        timeStr = timeStr + ":0" + seconds;
      } else {
        timeStr = timeStr + ":" + seconds;
      }
      return timeStr;
    };
  
    return (
      <div className='TaskTimer'>
        <div className='time'>{getTimeString()}</div>
        <button onClick={startTime}>Start</button>
        <button onClick={breakTime}>Break</button>
      </div>
    );
  }

export default TaskTimer;