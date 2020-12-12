import { GuitarString } from './Fretboard';

import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>Here's a sample</p>
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
          vals={['F', '', 'G', '', 'A', '', 'B', 'C', '', 'D', '', 'E']}
        />
        <br />
      </header>
    </div>
  );
}
