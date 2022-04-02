import React from 'react'
import styles from './styles/products.module.css';
import Card from '../components/Card/Card';
import Recombar from '../components/Header/Recombar';

const Products = () => {
  return (
    <>
        <Recombar/>
        <div className={styles.galdiv}>
            <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
    </>
  )
}

export default Products