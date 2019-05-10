import React, {useState, useEffect} from 'react';
import MyApp from './MyApp';
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

const App = () => {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch(`https://api.randomuser.me/`);
  
  return (
    <div className="App">
     <button onClick={() => setCount(count+1)}><h1>Click Me</h1></button>
     <h1>{count}</h1>
     {loading ? <h1>Loading...</h1> : <h2>{data.name.first}</h2>}
     <MyApp/>
    </div>
  );
}

export default App;
