import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/clientx');
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="App">
      <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
      {data && <div className="data-container">{JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
