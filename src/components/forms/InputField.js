import React from 'react';

const InputField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`form-group ${(touched && error) ? 'has-error': ''}`}>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <label className="control-label">{error}</label>}
    </div>
  </div>
)

export default InputField;
