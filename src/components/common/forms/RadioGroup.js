import React from 'react';

const RadioGroup = ({ input, label, options, type, meta: { touched, error } }) => (
  <div className={`form-group ${(touched && error) ? 'has-error': ''}`}>
    <div><label>{label}</label></div>
    {options.map(o => 
      <label className="radio-inline" key={o.value}>
        <input type="radio" {...input} value={o.value} checked={o.value === input.value} />{o.title}
      </label>)}
    {touched && error && <div><label className="control-label">{error}</label></div>}
  </div>
)

export default RadioGroup;