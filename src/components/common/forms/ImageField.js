import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ImageField extends Component {
  onFileClick (event) {
    event.target.value = ''
  }

  onChange = (field) => {
    console.log(field.name, '>> getFiles', field.files);
    // field
    // debugger
    // const files = event.target.files || event.dataTransfer.files;

    // if (!files.length) {
    //   return
    // }

    // field.files

    // this.createImage(files[0]);
  }

  createImage(event, file) {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      debugger
      this.props.input.onChange(event.target.result);
    }

    fileReader.readAsDataURL(file);
  }

  createPreview(file) {
    if (file) {
      file.preview = window.URL.createObjectURL(file);
      return file.preview;
    }

  }

  render() {
    const { field } = this.props;

    return (
      <div className="form-group image-upload">
        <label>{field.label}</label>
        <input className="input-file form-control" {...field.bind()} type="file" accept='.jpg, .png, .jpeg' />
        <img
            className="w-10 h-10"
            src={this.createPreview(field.file)} />
      </div>
    )
  }
}

export default ImageField;
