import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ClipLoader from "react-spinners/ClimbingBoxLoader";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#000");

  const [message, setMessage] = useState(false);

  const [punchline, setPunchline] = useState(false);
  const [punchline2, setPunchline2] = useState(false);
  const [punchline3, setPunchline3] = useState(false);

  const api = `http://hn.algolia.com/api/v1/search?query=${userInput}`;

  const fetchData = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data.hits);
        console.log(data);
      })
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
          {data.length ? (
            data.map((entry) => (
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
            ))
          ) : (
            <div className="loader">
              <ClipLoader
                color={color}
                loading={loading}
                size={25}
                aria-label="Loading Spinner"
                // cssOverride={override}
                data-testid="loader"
                speedMultiplier="5"
              />
            </div>
          )}
        </ol>
        <p className="more" onClick={() => setMessage(!message)}>
          More
        </p>
        {message ? (
          <div className="jokeContainer">
            <h2>No pagination for you ! Time for some jokes</h2>
            <div className="jokes">
              <p className="mainJoke" onClick={() => setPunchline(!punchline)}>
                When I met a girl I liked, I used to put all my favorite things
                about her surrounded by curly braces inside a Javascript file. I
                feel bad about it in hindsight.
              </p>
              {punchline ? (
                <p>-Now I know it's wrong to objectify women.</p>
              ) : null}
            </div>
            <div className="jokes">
              <p
                className="mainJoke"
                onClick={() => setPunchline2(!punchline2)}
              >
                Why did the programmer quit his job?
              </p>
              {punchline2 ? <p>-He didn't get arrays!"</p> : null}
            </div>
            <div className="jokes">
              <p
                className="mainJoke"
                onClick={() => setPunchline3(!punchline3)}
              >
                Why was the JavaScript file so large?
              </p>
              {punchline3 ? (
                <p>-It had too many scripts to 'console.log' its feelings.</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
