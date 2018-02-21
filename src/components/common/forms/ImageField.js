import React, { Component } from 'react';

class ImageField extends Component {
  onFileClick (event) {
    event.target.value = ''
  }

  onChange = (event) => {
    const files = event.target.files || event.dataTransfer.files;

    if (!files.length) {
      return
    }

    this.createImage(files[0]);
  }

  createImage(file) {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      this.props.input.onChange(event.target.result);
    }

    fileReader.readAsDataURL(file);
  }

  render() {
    const { input } = this.props;
    // Force push to re-render, cause new key is provided, issue with type["file"]
    // https://github.com/erikras/redux-form/issues/769#issuecomment-215411743
    const fileInputKey = input.value ? input.value.name : +new Date();

    return (
      <div className="form-group image-upload">
        <label>{this.props.label}</label>
        <input className="input-file form-control" key={fileInputKey} type="file" accept='.jpg, .png, .jpeg' onChange={this.onChange} />
      </div>
    )
  }
}

export default ImageField;
