import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDropzone } from 'react-dropzone';
import './App.css';
import api from './services/api'

function App() {
  const onDrop = useCallback((files) => {
    api.post('/', files[0], {
      params: {
        filename: files[0].name
      }
    })
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
