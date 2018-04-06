import React from 'react';
import axios from 'axios';
import Upload from './Upload';
import Files from './Files';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: props.files
    }

    this.newUploads = this.newUploads.bind(this);
    this.deleteUpload = this.deleteUpload.bind(this);
  }

  newUploads(files) {
    this.setState({ files });
  }

  deleteUpload(index) {
    this.setState({
      files: [
        ...this.state.files.slice(0, index - 1),
        ...this.state.files.slice(index)
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Upload
          newUploads={this.newUploads}
        />

        <Files
          deleteUpload={this.deleteUpload}
          files={this.state.files}
        />
      </div>
    )
  }
}

export default App;
