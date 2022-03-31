import React from 'react';
import styles from './input.module.css';

const Input = ({ label, type, placeholder, name, value, onChange }) => {
    return (
        <>
            <div className={styles.contentdiv}>
                <div className={styles.subcontent}>
                    {label ? label : 'Label'}
                </div>
                <div className={styles.subcontent}>
                    <input
                        type={type ? type : 'text'}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder ? placeholder : 'add placeholder'}
                        autoComplete='off'
                    />
                </div>
            </div>

        </>
    )
}

export default Input