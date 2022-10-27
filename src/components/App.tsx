import { useState } from 'react';
import '../css/App.css'
import StartupOptions from './StartupOptions';
import Editor from './Editor';

function App() {
  const [showOptions, setShowOptions] = useState(true);
  const [height, setHeight] = useState(16);
  const [width, setWidth] = useState(16);
  
  
  return (
    <div className="App">
      {
        showOptions
        ? <StartupOptions 
            updateHeight={setHeight} 
            updateWidth={setWidth}
            updateShowOptions={setShowOptions}
          />
        : <Editor height={height} width={width}/>
      }
    </div>
  );
}

export default App;
