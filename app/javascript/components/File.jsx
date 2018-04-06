import React from 'react';

const File = props => {
  return (
    <div className="file">
      <div className="name">{props.file.name}</div>
      <div className="buttons">
        <i className="fa fa-download download" onClick={() => props.handleFileDownload()}></i>
        <i className="fa fa-trash-alt delete" onClick={() => props.handleFileDelete(props.file.id)}></i>
      </div>
    </div>
  );
}

export default File;
