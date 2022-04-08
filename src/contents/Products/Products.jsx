import React, { useEffect, useState } from 'react'
import styles from './products.module.css';
import Card from '../../components/Card/Card';
import Recombar from '../../components/Header/Recombar';
import { useSelector } from 'react-redux';

const Products = () => {
    const product = useSelector(state => state.product);
    const { products, searchedProduct } = product;
    const [deleteId, setDeleteId] = useState('');

    const Mapping = (arr) => {
        return arr.map((val) => (
            <Card
                base64={val.productImage}
                name={val.name}
                price={val.price}
                priceOffered={val.priceOffered}
                id={val.id}
                key={val.id}
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
                {product.loading ? (
                    <>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </>
                ) : (
                    searchedProduct.length > 0 ? Mapping(searchedProduct) : Mapping(products)
                )
                }
            </div>
            {!product.loading && product.products.length == 0 && (
                <p className={styles.noproduct}>No Product Available 😕😕😕</p>
            )}
        </>
    )
}

export default Products