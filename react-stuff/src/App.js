import { useEffect, useState } from "react";
import axios from "axios";

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    console.log(data);
    return JSON.stringify(data);
  })
  .catch(err => {
    console.error(err);
  })
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserDataJSON(randomData || "No user data found.");
    })
  }, [])

  return (
    <div className="app">
      <div className="counter">
        <h2>Simple Counter</h2>
        <p>{counter}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Increase Counter</button>
        <p className="randomAPI">{randomUserDataJSON}</p>
      </div>
    </div>
  );
}

export default App;
