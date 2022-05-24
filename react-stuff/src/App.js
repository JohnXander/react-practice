import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <div className="counter">
        <h2>Simple Counter</h2>
        <p>{counter}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Increase Counter</button>
      </div>
    </div>
  );
}

export default App;
