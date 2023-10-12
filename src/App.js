
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [mili, setMili] = useState(0);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  var upmin = min, uphour = hour, upsec = sec, upmili = mili;
  const run = () => {
    if (status === 0) {
      setInterv(
        setInterval(() => {
          startimer()
        }, 10));
      setStatus(1);
    }
  }

  const stopwatch = () => {
    if (status === 1) {
      clearInterval(interv);
      setStatus(0)
    }
  }
  const startimer = () => {

    upmili++
    setMili(upmili);
    if (upmili === 100) {

      upsec++;
      upmili = 0;
      setMili(upmili);
      setSec(upsec);
    }
    if (upsec === 3) {
      upmin++;
      upsec = 0;
      setSec(upsec);
      setMin(upmin);
    }

  }

  const resetwatch = () => {
    clearInterval(interv)
    setStatus(0);
    setMili(0);
    setMin(0);
    setSec(0);
    setHour(0);

  }

  return (
    <div className="main-section">
      <div className='clock-holder'>
        <div className='stopwatch'>
          <div className='hour'><p>

            {hour} : {min} : {sec} : {mili}
          </p></div>
          <div className='min'>min</div>
          <div className='sec'>sec</div>

        </div>
        <div>
          {(status === 0) &&
            <button onClick={run} >start</button>
          }
          {(status === 1) &&

            <button onClick={stopwatch}>stop</button>


          }

          <button onClick={resetwatch}>Reset</button>


        </div>
      </div>
    </div>
  );
}

export default App;
