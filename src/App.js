import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [jokes, setJokes] = useState([]);

  const FetchJokes = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJokes(data);
  };

  useEffect(() => {
    FetchJokes();
  }, []);

  return (
    <div className="App">
      <h1>Get your new jokes.</h1>
      <p>{jokes.value}</p>
      <button className="btn" onClick={FetchJokes}>
        {" "}
        Get new joke{" "}
      </button>
    </div>
  );
}
