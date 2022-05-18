import React from 'react'
import styles from './landing.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Landing = () => {

    const auth=useSelector(state=>state.auth);

  return (
    <>
        <div className={styles.maindiv}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    {auth.authenticate ? 'Start by adding your products':'Want to Start Journey with Cartany'}
                
                </div>
                <div className={styles.btn}>
                    {auth.authenticate ? (
                        <Link href={'/products'}>
                            <button className={styles.btngreen}>Go to add products &#x2794;</button>
                        </Link>
                    ):(
                        <Link href={'/signin'}>
                        <button className={styles.btnred}>Begin your journey with Cartany! &#x2794;</button>
                        </Link>

                    ) }
                    
                </div>
    
            </div>
        </div>
    </>
  )
}

export default Landing