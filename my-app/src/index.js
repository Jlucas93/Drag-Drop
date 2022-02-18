import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import {useDropzone} from 'react-dropzone';
import './App.css';

function App() {
  const onDrop = useCallback((files) => {

    const formData = new FormData();
    formData.append('uploadedFile', files);

    
    for( let i= 0; i<files.length; i++){
      console.log(files[i].path)
    }
    
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

