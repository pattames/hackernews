import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");

  const api = `http://hn.algolia.com/api/v1/search?query=${userInput}`;

  const fetchData = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data.hits))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [userInput]);

  return (
    <div className="mainContainer">
      <Navbar />
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      <div className="main">
        <ol>
          {data.map((entry) => (
            <div key={entry.objectID}>
              <div className="entry">
                <li className="triangle">&#9650;</li>
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
        </ol>
      </div>
    </div>
  );
}

export default App;
