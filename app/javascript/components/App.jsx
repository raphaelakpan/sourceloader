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

  deleteUpload(id) {
    const confirmDelete = confirm("Delete file?");
    if (!confirmDelete) return;

    const { files } = this.state;
    const index = this.state.files.findIndex(file => file.id === id);

    axios.delete(`/uploads/${id}`).then(() => {
      this.setState({
        files: [
          ...files.slice(0, index),
          ...files.slice(index + 1)
        ]
      })
    }).catch(error => console.log(error));
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
