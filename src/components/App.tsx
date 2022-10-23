import React, { useState } from 'react';
import '../css/App.css'
import Editor from './Editor';

function App() {
  const [showOptions, setShowOptions] = useState(true);
  const [height, setHeight] = useState(16);
  const [width, setWidth] = useState(16);
  
  
  return (
    <div className="App">
      {
        showOptions 
        ? <div>
            <h1>Set grid dimensions</h1>
            <div>
              <label>Height</label>
              <input
                name='height'
                type='number'
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))} 
              />
            </div>
            <div>
              <label>Width</label>
              <input
                name='width'
                type='number'
                value={width}
                onChange={(e) => setWidth(parseInt(e.target.value))} 
              />
            </div>

            <button onClick={() => setShowOptions(false)}>Start Drawing!</button>
          </div> 
        : <Editor height={height} width={width}/>
      }
    </div>
  );
}

export default App;
