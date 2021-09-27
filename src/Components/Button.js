import React, { useCallback, useRef } from 'react';

const Button = (props) => {
  const waitClickCount = useRef(0);

  const handleWaitClick = useCallback(() => {
    waitClickCount.current++;
    setTimeout(() => {
      if (waitClickCount.current === 2) {
        switch (props.status) {
          case 1:
            props.wait();
            break;
          case 2:
            props.resume();
            break;
          default:
            break;
        }
      }
      waitClickCount.current = 0;
    }, 300);
  }, [props]);

  return (
    <div>
      {props.status === 0 ? (
        <button className="stopwatch-btn stopwatch-btn-blue" onClick={props.start}>
          Start
        </button>
      ) : (
        ''
      )}

      {props.status === 1 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>
            Stop
          </button>
          <button className="stopwatch-btn stopwatch-btn-purple" onClick={handleWaitClick}>
            Wait
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
      {props.status === 2 ? (
        <div>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>
            Stop
          </button>
          <button className="stopwatch-btn stopwatch-btn-blue" onClick={handleWaitClick}>
            Resume
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Button;
