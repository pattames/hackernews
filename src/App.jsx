import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const api = "http://hn.algolia.com/api/v1/search?query=react";

  const fetchData = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data.hits))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <h1>dhdhd</h1>
      {data.map((entry) => (
        <div>{entry.title}</div>
      ))}
    </>
  );
}

export default App;
