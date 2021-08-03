import React,{useState} from "react";
import Header from "./Header"
import Nav from "./Nav"
import Results from "./Results"
import './App.css';
import requests from "./requests"

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);


  return (
    <div className="app">
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;

// 77b7717a9faed8fe4446037781c7d473