import React from 'react';

const File = props => {
  const { file } = props;

  return (
    <div className="file">
      <div className="name">{file.name}</div>
      <div className="buttons">
        <a href={file.url} download={file.name}>
          <i className="fa fa-download download"></i>
        </a>
        <i className="fa fa-trash-alt delete" onClick={() => props.deleteUpload(file.id)}></i>
      </div>
    </div>
  );
}

export default File;
