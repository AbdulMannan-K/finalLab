import React from 'react';

const Input = (props) => {

    const {name,type,label,value,onChange} = props;

    return (
        <div>
            <label
            >{label}</label>
            <input
                name={name}
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;