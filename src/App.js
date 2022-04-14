import { useState, useEffect } from "react";
import Timer from './Timer/Timer.js';
import Button from './Button/Button.js'
import Container from './Container/Container.js';

const App = () => {

const [time, setTime] = useState(0)
const [startTime, setStartTime] = useState(false)

useEffect(() => {

  let interval = null;

    if (startTime) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else if (startTime){
      clearInterval(interval)
    }
    return () => clearInterval(interval)

  }, [startTime])


return (
    <Container>
      <Timer time = {time}/>
      <Button setTime = {setTime} setStartTime = {setStartTime} />
    </Container>
  );
}

export default App;
