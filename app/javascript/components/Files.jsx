import React from 'react';
import File from './File';

const Files = (props) => {
  return (
    <div className="App-item Files">
      {props.files.map((file, index) =>
        <File
          file={file}
          key={index}
          handleFileDelete={props.deleteUpload}
        />
      )}
    </div>
  );
}

export default Files;
