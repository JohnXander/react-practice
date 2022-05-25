import { useEffect, useState } from "react";
import axios from "axios";

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    console.log(data);
    return data;
  })
  .catch(err => {
    console.error(err);
  })
}

const getFullUserName = (userInfo: UserInfo) => {
  const { name: { first, last } } = userInfo;
  return `${first} ${last}`;
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || "No user data found.");
      setUserInfos(randomData.results);
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
        {
          userInfos.map((userInfo: UserName, idx) => (
            <div className="randomAPI" key={idx}>
              <h3>{getFullUserName(userInfo)}</h3>
              <img src={userInfo.picture.thumbnail} alt="User Picture" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
