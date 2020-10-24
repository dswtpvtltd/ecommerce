import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, type, label, ...otherProps }) => {
    return (<div className="formRow">
        {label && (
            <label>{label}</label>
        )}
        <input className="formInput" type={type} {...otherProps} />
    </div>);
}

export default FormInput;