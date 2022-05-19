import React, { useState } from 'react';
import {FaGoogle} from "react-icons/fa";
import styles from './styles/signup.module.css';
import Input from '../components/InputField/Input';
import Link from 'next/link';
import Skeleton from '../components/Loader/Skeleton';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../redux/actions';

const Signup = () => {
    const defaultFormdata = { name: '', email: '', phoneNumber: '', password: '', cpassword: '' };
    const [formData, setFormData] = useState(defaultFormdata);
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(state => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpAction(formData, setFormData, defaultFormdata, router));
    }

    return (
        <>

            <div className={styles.backimg}>
                <form className={styles.signupform} onSubmit={handleSubmit} autoComplete="off">
                    <div className={styles.maindiv}>
                        <div className={styles.contentdiv}>
                            <div className={styles.headmargin}>
                                <div className={styles.head}>Welcome to Cartany!</div>
                            </div>
                        </div>
                    </div>
                    {auth.loading ? <Skeleton /> : (
                        <>
                            <div className={styles.maindiv}>
                                <Input
                                    label="Name"
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
                                    label="Phone Number"
                                    type="tel"
                                    placeholder="Enter your phone number"
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
                            </div>
                            <div className={styles.maindiv}>
                                <div className={styles.contentdiv}>
                                    <div className={styles.buttonmargin}>
                                        <button className={styles.button} type='submit'>Sign up</button>

                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    <div className={styles.helper}>
                        <p>Already have an account? <span>
                            <Link href="/signin">
                                login here!
                            </Link>
                        </span></p>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Signup