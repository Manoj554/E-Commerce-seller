import React, { useEffect, useState } from 'react'
import styles from './products.module.css';
import Card from '../../components/Card/Card';
import Recombar from '../../components/Header/Recombar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductAction } from '../../redux/actions';
import { Skeleton } from '@mui/material';

const Products = () => {
    const product = useSelector(state => state.product);
    const [deleteId, setDeleteId] = useState('');

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
                    product.products.length > 0 && (
                        product.products.map((val) => (
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
                        ))
                    )
                )}
            </div>
            {!product.loading && product.products.length == 0 && (
                <p className={styles.noproduct}>No Product Available 😕😕😕</p>
            )}
        </>
    )
}

export default Products