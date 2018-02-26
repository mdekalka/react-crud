import React from 'react';
import { observer } from 'mobx-react';

const InputField = observer(({ field, type = 'text', placeholder = null }) => (
  <div className={`form-group ${field.error ? 'has-error': ''}`}>
    <label>{field.label}</label>
    <div>
      <input className="form-control" {...field.bind({ type, placeholder }) } />
      {field.error && <label className="control-label">{field.error}</label>}
    </div>
  </div>
))

export default InputField;
