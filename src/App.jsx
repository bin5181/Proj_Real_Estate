import "./App.css";
import { useEffect, useState } from "react";
import data from "./data";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Property from "./Components/Property";

function App() {
  const [propData, setPropData] = useState([]);

  useEffect(() => {
    setPropData(data);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5 center">
        <Filter setPropData={setPropData} />
        <div className="mb-3 d-flex flex-wrap justify-content-between">
          {Array.from(propData).map((el, i) => (
            <Property key={i} property={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
