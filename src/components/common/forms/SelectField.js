import React from 'react';

const SelectField = ({ input, multiple, label, type, meta: { touched, error }, children }) => (
  <div className={`form-group ${(touched && error) ? 'has-error': ''}`}>
    <label>{label}</label>
    <div>
      <select multiple={multiple ? true : false} {...input}>
        {children}
      </select>
      {touched && error && <label className="control-label">{error}</label>}
    </div>
  </div>
)

export default SelectField;
