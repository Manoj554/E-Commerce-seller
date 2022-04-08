import React from 'react'
import styles from './Card.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction } from '../../redux/actions';
import { Skeleton } from '@mui/material';
const Card = ({ id, base64, name, price, priceOffered, discount, deleteId, setDeleteId }) => {
	const dispatch = useDispatch();
	const product = useSelector(state => state.product);

	const handleDelete = (e) => {
		setDeleteId(e.target.value);
		dispatch(deleteProductAction(e.target.value));
	}

	return (
		<>

			<div className={styles.card} key={id}>
				{product.loading || (product.deleting && deleteId == id) ? (
					<>
						<Skeleton height={30} />
						<Skeleton />
						<Skeleton height={100} />
						<Skeleton />
						<Skeleton />
						<Skeleton height={70} />
						<Skeleton />
						<Skeleton />
						<Skeleton height={50} />
						{product.deleting && (
							<h3 style={{ textAlign: 'center' }}>deleting ...</h3>
						)}
					</>
				) : (
					<>
						<div className={styles.imgdiv}>
							<img src={base64} />
						</div>
						<div className={styles.descdiv}>
							<div className={styles.branddiv}>{name}</div>
							<div className={styles.typediv}> 4.3⭐ (1232)</div>
							<div className={styles.pricediv}>Rs.<span>{priceOffered}</span>&ensp;<span className={styles.strike}>Rs.<span>{price}</span></span>&ensp;
								<span className={styles.discspan}>(<span>{discount}</span>% off)</span>
							</div>
						</div>
						<div className={styles.buttondiv}>
							<div className={styles.delete}>
								<button value={id} onClick={handleDelete}>Delete</button>
							</div>
							<div className={styles.edit}>
								<Link as={`products/edit-product/${id}`} href={`products/edit-product?id=${id}`}>
									<button>Edit</button>
								</Link>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}
export default Card;