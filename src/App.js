import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { fetchPokemons } from "./redux/actions/pokemon";

function App() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemons());
      setPokemons([{}, {}]);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
