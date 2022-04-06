import React from 'react'
import styles from './Card.module.css';

const Card = ({ id, base64, name, price }) => {
	return (
		<>
			<div className={styles.card} key={id}>
				<div className={styles.imgdiv}>
					<img src={base64} />
				</div>
				<div className={styles.descdiv}>
					<div className={styles.branddiv}>{name}</div>
					<div className={styles.typediv}>Men's T-Shirt Pure cotton polo</div>
					<div className={styles.pricediv}>{price}
						<span className={styles.discspan}>(50% off)</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card;