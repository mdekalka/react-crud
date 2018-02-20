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
    return (
      <div className="form-group image-upload">
        <label>{this.props.label}</label>
        <input className="input-file form-control" type="file" accept='.jpg, .png, .jpeg' onChange={this.onChange} />
      </div>
    )
  }
}

export default ImageField;
