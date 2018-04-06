import React from 'react'
import File from './File'

class Files extends React.Component {
  constructor(props) {
    super(props);

    this.handleFileDownload = this.handleFileDownload.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);
  }

  handleFileDownload() {
    console.log("Download");
  }

  handleFileDelete(id) {
    console.log("Delete", id);
  }

  render() {
    const { files } = this.props;

    return (
      <div className="App-item Files">
        {files.map((file, index) =>
          <File
            file={file}
            key={index}
            handleFileDownload={this.handleFileDownload}
            handleFileDelete={this.handleFileDelete}
          />
        )}
      </div>
    )
  }
}

export default Files;
