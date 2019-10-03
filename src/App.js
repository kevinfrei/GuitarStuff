// @flow
import React from 'react';
import { GuitarString } from './Fretboard';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GuitarString
          hdr="e"
          str={1}
          vals={['F', '', 'G', '', 'A', '', 'B', 'C', '', 'D', '', 'E']}
        />
        <br />
        <GuitarString
          hdr="B"
          str={2}
          vals={['C', '', 'D', '', 'E', 'F', '', 'G', '', 'A', '', 'B']}
        />
        <br />
        <GuitarString
          hdr="G"
          str={3}
          vals={['', 'A', '', 'B', 'C', '', 'D', '', 'E', 'F', '', 'G']}
        />
        <br />
        <GuitarString
          hdr="D"
          str={4}
          vals={['', 'E', 'F', '', 'G', '', 'A', '', 'B', 'C', '', 'D']}
        />
        <br />
        <GuitarString
          hdr="A"
          str={5}
          vals={['', 'B', 'C', '', 'D', '', 'E', 'F', '', 'G', '', 'A']}
        />
        <br />
        <GuitarString
          hdr="E"
          str={6}
          vals={['F', 'F#', 'G', '', 'A', '', 'B', 'C', '', 'D', '', 'E']}
        />
        <br />
      </header>
    </div>
  );
}

export default App;
