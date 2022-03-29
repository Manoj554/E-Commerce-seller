import React, { useState } from 'react';
import styles from './styles/signin.module.css';
import signinImg from '../utils/images/signin.jpg';
import Input from '../components/InputField/Input';
import Link from 'next/link';


const Signin = () => {
    const [formData, setFormData] = useState({ user: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ user: '', password: '' });

    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 style={{ marginBottom: '10px' }}>CartAny</h1>
                        <Input
                            label="Email or Phone No."
                            type="text"
                            placeholder="Enter your email or phone number"
                            name="user"
                            value={formData.user}
                            onChange={handleChange}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div className={styles.buttons}>
                            <button className={styles.btn} type="submit">Signin</button>
                            <button className={`${styles.btn} ${styles.googlebtn}`} type="button">Google</button>
                        </div>
                    </form>
                    <div className={styles.helper}>
                        <p>Do not have account? <span>
                            <Link href="/signup">
                                create here!
                            </Link>
                        </span></p>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src={signinImg.src} alt="Signin Image" />
                </div>
            </div>

        </>
    )
}

export default Signin