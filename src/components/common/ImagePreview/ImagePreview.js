import React from 'react';
import PropTypes from 'prop-types';

import './ImagePreview.scss';

const ImagePreview = ({ src }) => (
  <div className="image-preview-container">
    <img className="image-preview" src={src} alt="preview avatar" />
  </div>
);

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired
};

ImagePreview.defaultProps = {
  src: ''
};

export default ImagePreview;
