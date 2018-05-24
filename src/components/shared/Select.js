import React from "react";
import PropTypes from "prop-types";
import './Select.css';


const Select = ({name, title, placeholder, value, options, handleChange}) => {
  return (
    <div className="select">
      <label htmlFor={name}>{title}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => {
          return (
            <option
              key={option}
              value={option}
              label={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div> 
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired
};

export default Select;
