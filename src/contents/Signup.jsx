import React, { useState } from 'react';
import styles from './styles/signup.module.css';
import signupImg from '../utils/images/signup.jpg';
import Input from '../components/InputField/Input';
import Link from 'next/link';

const Signup = () => {
    const defaultFormdata = { name: '', email: '', phoneNumber: '', password: '', cpassword: '' };
    const [formData, setFormData] = useState(defaultFormdata);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(defaultFormdata);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src={signupImg.src} alt="Signin Image" />
                </div>
                <div className={styles.box}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 style={{ marginBottom: '10px' }}>CartAny</h1>
                        <Input
                            label="Full Name."
                            type="text"
                            placeholder="Enter your full name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <Input
                            label="Phone No."
                            type="tel"
                            placeholder="Enter your phone no."
                            name="phoneNumber"
                            value={formData.phoneNumber}
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
                        <Input
                            label="Repeat Password"
                            type="password"
                            placeholder="Confirm your password"
                            name="cpassword"
                            value={formData.cpassword}
                            onChange={handleChange}
                        />
                        <div className={styles.buttons}>
                            <button className={styles.btn} type="submit">Signin</button>
                            <button className={`${styles.btn} ${styles.googlebtn}`} type="button">Google</button>
                        </div>
                        <div className={styles.helper}>
                            <p>Already have an account? <span>
                                <Link href="/signin">
                                    login here!
                                </Link>
                            </span></p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup