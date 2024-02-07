import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
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
    <div className="mainContainer">
      <Navbar />
      <div className="main">
        {data.map((entry) => (
          <div key={entry.id}>
            <div className="entry">
              <div className="triangle">&#9650;</div>
              <a href={entry.url}>{entry.title}</a>
              <div className="url">{entry.url}</div>
            </div>
            <div className="entry_2">
              <div>{entry.points} points</div>
              <div>by {entry.author}</div>
              <div>{entry.created_at} |</div>
              <div> hide |</div>
              <div>{entry.num_comments}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
