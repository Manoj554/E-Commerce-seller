import React from 'react';
import style from './input.module.css';

const Input = ({ label, type, placeholder, name, value, onChange }) => {
    return (
        <>
            <div className={style.box}>
                <label htmlFor={name}>{label ? label : 'Label'}</label>
                <input
                    type={type ? type : 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : 'add placeholder'}
                    autoComplete="off"
                />
            </div>
        </>
    )
}

export default Input