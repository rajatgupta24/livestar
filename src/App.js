import { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file == null) return;

    let j=1;
    for (let i = 1; i < file.length; i++) {
      
      if (file[i-1][0] === file[i][0]){
        j++;
      } else {
        j=1;
      }

      console.log(file[i], j);
    }
  }, [file]);

  const fileHandler = (e) => {
    e.preventDefault();

    var files = e.target.files, f = files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];
        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        setFile(dataParse);
    };
    reader.readAsBinaryString(f)
  }

  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <input type="file" onChange={(e) => fileHandler(e)}/>
    </div>
  );
}

export default App;
