import React from 'react';
import ReactDOM from 'react-dom';
import {useDropzone} from 'react-dropzone';

function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Arraste e solte aqui o aquivo</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Basic />
  </React.StrictMode>,
  document.getElementById('root')
);
