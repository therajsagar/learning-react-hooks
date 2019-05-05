import React, {useState, useEffect} from 'react';
import './App.css';

const useFetch = (url) =>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
     const response = await fetch(url);
     const data = await response.json();
     const [info] = data.results;
     setData(info);
     setLoading(false);
    })();
  }, [url]);
  
  return {data, loading};
}

function App() {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch(`https://api.randomuser.me/`);

  useEffect(() => {
     
  }, []);

  return (
    <div className="App">
     <button onClick={() => setCount(count+1)}><h1>Click Me</h1></button>
     <h1>{count}</h1>
     {loading ? <h1>Loading...</h1> : <h1>{data.name.first}</h1>}
    </div>
  );
}

export default App;
