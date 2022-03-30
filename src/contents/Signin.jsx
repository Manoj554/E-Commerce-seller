import React, { useState } from 'react';
import styles from './styles/signin.module.css';
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
            <div className={styles.backimg}>
                <form className={styles.signinform} onSubmit={handleSubmit} >
                    <div className={styles.maindiv}>
                            <div className={styles.contentdiv}>
                                <div className={styles.headmargin}>
                                    <div className={styles.head}>Welcome to Cartany!</div>
                                </div>
                            </div> 
                    </div>
                    <div className={styles.maindiv}>
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
                       
                        <div className={styles.contentdiv}>
                            <div className={`${styles.subcontent}   ${styles.extradiv}`}>
                                <div className={styles.spandiv}><input type="checkbox" />  Keep me signed in</div>
                                <div className={`${styles.spandiv} ${styles.forgot}`}>Forgot password?</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.maindiv}>
                            <div className={styles.contentdiv}>
                                <div className={styles.buttonmargin}>
                                    <button className={styles.button} type='submit'>Sign in</button>
                                </div>
                                <div className={styles.googlemargin}>
                                    <button className={`${styles.googlebtn} ${styles.button}`} type='submit'>Sign in with Google</button>
                                    
                                </div>
                            </div>
                            
                    </div>
                    <div className={styles.helper}>
                            <p>New to Cartany? <span>
                                <Link href="/signup">
                                    Create an Account
                                </Link>
                            </span></p>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Signin