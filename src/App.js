import "./index.css";
import "./background.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);
  const [data, setData] = useState([]); // Since you know the type of data you are expecting, this being an array
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `this is an HTTP error: the status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.results);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen ">
        <div className="p-7">
          <h1 className="m-4 text-white font-extrabold text-5xl text-center">
            {" "}
            Star Wars{" "}
          </h1>
          {loading && (
            <div className="text-white text-center">
              Data is loading. Please wait
            </div>
          )}
          {error && (
            <div className="text-white text-center"> There is a problem</div>
          )}
          <div className="grid grid-cols-3 grid-rows-2 gap-6  ">
            {data &&
              data.map((item) => {
                return (
                <Card key={item.episode_id} item={item}/> // it's better to break into smaller components
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
