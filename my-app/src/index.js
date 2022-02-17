import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import {useDropzone} from 'react-dropzone';
import './App.css';

function App() {
  const onDrop = useCallback((files) => {
    let formData = new FormData();
    formData.append('uploadedFile', files);
    //let name = formData.get('uploadedFile');

    console.log(files);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte os arquivos aqui...</p>
      ) : (
        <p>Arraste e solte os arquivos aqui</p>
      )}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
