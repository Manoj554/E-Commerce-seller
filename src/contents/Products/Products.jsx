import React, { useEffect } from 'react'
import styles from './products.module.css';
import Card from '../../components/Card/Card';
import Recombar from '../../components/Header/Recombar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductAction } from '../../redux/actions';

const Products = () => {
  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  return (
    <>
      <Recombar />
      <div className={styles.galdiv}>
        {product.products.length > 0 ? product.products.map((val) => (
          <Card
            base64={val.productImage}
            name={val.name}
            price={val.price}
            id={val._id}
            key={val._id}
          />
        )) : null}
        {console.log(product.products)}
      </div>
    </>
  )
}

export default Products