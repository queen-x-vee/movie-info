import "./index.css";
import "./background.css";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
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
        console.log(actualData)
        setData(actualData.results);
        setError(null)
      })
      .catch((error) => {
        console.log(error)
        setError(error);
      }).finally(()=>{
        setLoading(false)
      })
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen ">
        
        
        
        <div className="p-7">
        <h1 className="m-4 text-white font-extrabold text-5xl text-center"> Star Wars </h1>
        {loading && <div className="text-white text-center">Data is loading. Please wait</div>}
        {error && <div className="text-white text-center"> There is a problem</div> }
        <div className="grid grid-cols-3 grid-rows-2 gap-6  ">
          {data && data.map((item)=>{
            return(
              
              <div key= {item.episode_id} className='p-6 bg-slate-800 rounded-lg'>
               <h2 className="text-white text-xl font-semibold">{item.title}
</h2>
<p className="text-white mb-4 ">{item.release_date}</p>
<p className="text-white mb-6">{item.opening_crawl}</p>
<div className="border-[4px] border-red-500" ></div>
<a href='/' className='text-yellow-300'>
  More info
</a>

              </div>
              
            )
          })}</div>




        </div>
      </div>
    </>
  );
}

export default App;
