import { useEffect, useState } from 'react';
import './App.css';

import script from './python/main.py';
// work in progress, can I use two scripts?: 
import script2 from './python/main2.py';
// load the code:
var loadedState="null"
const runScript = async (code) => {
  const pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
  });
  await pyodide.loadPackage("matplotlib");
  

  return await pyodide.runPythonAsync(code);
}

const App = () => {
  // if loading, display loading
  const [output, setOutput] = useState("(loading scripts...)");
  // const [output2, setOutput2] = useState("(loading scripts...)");

// Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document
    const run = async () => {
      const scriptText = await (await fetch(script)).text();
      const out = await runScript(scriptText);


      setOutput(out);
      // setOutput2(out2);
    }
    run();

  }, []);

  return (
    <div className="App">

       {output}

    </div>
  );
}

export default App;
