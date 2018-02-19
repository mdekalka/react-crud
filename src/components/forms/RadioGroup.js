import React from 'react';

const RadioGroup = ({ input, label, type, meta: { touched, error } ) => (
  <div>
    {options.map(o => <label key={o.value}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>)}
    {touched && error && <label className="control-label">{meta.error}</label>}
  </div>
)

export default RadioGroup;