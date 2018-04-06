import React from "react";
import axios from "axios";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadPercentage: 0
    }

    this.handleUpload = this.handleUpload.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleUploadProgress = this.handleUploadProgress.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    this.state.files.forEach(file => {
      formData.append('files[]', file, file.name);
    });

    this.setState({ uploading: true });
    axios.post('/uploads', formData, { onUploadProgress: this.handleUploadProgress })
    .then(response => {
      form.reset();
      this.setState({
        files: [],
        uploading: false,
        uploadPercentage: 0
      });
      this.props.newUploads(response.data);
    })
    .catch(error => console.log(error));
  }

  handleFileInput(e) {
    const files = Array.from(e.target.files);
    this.setState({ files });
  }

  handleUploadProgress(progressEvent) {
    const uploadPercentage = Math.round(progressEvent.loaded / progressEvent.total * 100);
    this.setState({ uploadPercentage });
  }

  render() {
    const { uploading, uploadPercentage } = this.state;

    return (
      <form className="App-item Upload" onSubmit={this.handleUpload} ref="form">
        <div className="form-group">
          <label htmlFor="file">Select Files</label>
          <input type="file" name="upload" className="form-control-file" id="file" onChange={this.handleFileInput} multiple />
        </div>
        <div className="form-group">
          {uploading &&
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar" style={{ width: `${uploadPercentage}%` }}
                aria-valuenow={uploadPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`${uploadPercentage}`}%
              </div>
            </div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit"> Upload Files </button>
          {uploading &&
            <img className="spinner" src="/loading_spinner.gif" alt="loading..." />
          }
        </div>
        {this.state.files.length > 0 &&
          <div className="form-group">
             <ul className="list">
              <div> Selected file(s): </div>
              {this.state.files.map((file, index) =>
                <li className="list-item" key={index}> {file.name} </li>
              )}
            </ul>
          </div>
        }
      </form>
    );
  }
}

export default Upload;
