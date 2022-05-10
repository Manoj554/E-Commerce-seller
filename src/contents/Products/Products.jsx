import React, { useEffect, useState } from 'react'
import styles from './products.module.css';
import Card from '../../components/Card/Card';
import Recombar from '../../components/Header/Recombar';
import { useSelector } from 'react-redux';

const Products = () => {
    const { loading, products, searchedProduct, isSearched } = useSelector(state => state.product);
    const [deleteId, setDeleteId] = useState('');

    const Mapping = (arr) => {
        return arr.map((val) => (
            <Card
                key={val.id}
                base64={val.productImage}
                name={val.name}
                price={val.price}
                priceOffered={val.priceOffered}
                id={val.id}
                retailPrice={val.retailPrice}
                discount={val.percentageOff}
                deleteId={deleteId}
                setDeleteId={setDeleteId}
            />
        ));
    }

    return (
        <>
            <Recombar />
            <div className={styles.galdiv}>
                {loading ? (
                    <>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </>
                ) : (
                    !isSearched ? Mapping(products) : Mapping(searchedProduct)
                )
                }
            </div>
            {!loading && (products.length == 0 || searchedProduct.length == 0) && isSearched && (
                <p className={styles.noproduct}>No Product Available 😕😕😕</p>
            )}
        </>
    )
}

export default Products