import React from 'react';

const parse = (event, multiple) => {
  if (multiple) {
    const result = []
    for (let index = 0; index < event.target.selectedOptions.length; index++) {
      result.push(JSON.parse(event.target.selectedOptions[index].value));
    }
    return result
  }

  return JSON.parse(event.target.value);
}

const SelectObject = ({ input, multiple, options, label, meta: { touched, error }, ...rest }) => (
  <div className={`form-group ${(touched && error) ? 'has-error': ''}`}>
    <label>{label}</label>
    <div>
      <select 
        multiple={multiple ? true : false}
        onBlur={event => input.onBlur(parse(event, multiple))}
        onChange={event => input.onBlur(parse(event, multiple))}
        {...rest}>
        {options.map(role => (
          <option key={role.key} value={JSON.stringify(role)}>{role.title}</option>
        ))}
      </select>
      {touched && error && <label className="control-label">{error}</label>}
    </div>
  </div>
)

export default SelectObject;
