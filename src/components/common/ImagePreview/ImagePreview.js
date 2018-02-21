import React from 'react';

import './ImagePreview.scss';

const ImagePreview = ({ src }) => (
  <div className="image-preview-container">
    <img className="image-preview" src={src} alt="preview avatar" />
  </div>
)

export default ImagePreview;