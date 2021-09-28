import React, { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Display from './Components/Display';
import Button from './Components/Button';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isWatching, setIsWatching] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (isWatching) {
          setTime((prevVal) => {
            return prevVal + 1;
          });
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [isWatching]);

  const start = () => {
    setIsWatching((prevState) => !prevState);
    setStatus(1);
  };

  const resume = () => {
    setIsWatching(true);
    setStatus(1);
  };

  const stop = () => {
    setTime(0);
    setIsWatching(false);
    setStatus(0);
  };

  const reset = () => {
    setTime(0);
    setIsWatching(true);
    setStatus(1);
  };

  const wait = () => {
    setIsWatching(false);
    setStatus(2);
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <Button
            status={status}
            start={start}
            stop={stop}
            reset={reset}
            resume={resume}
            wait={wait}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
