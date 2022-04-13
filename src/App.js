import { useState, useEffect } from "react";
import Timer from './Timer/Timer.js';
import Button from './Button/Button.js'
import Container from './Container/Container.js';

const App = () => {

const [time, setTime] = useState(0)
const [timeStart, setStartTime] = useState(false)

useEffect(() => {

  let interval = null;

    if (timeStart) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)

  }, [timeStart])


return (
    <Container>
      <Timer time = {time}/>
      <Button setTime = {setTime} setTimeStart = {setStartTime} />
    </Container>
  );
}

export default App;
