import React from 'react'
import styles from './Card.module.css';

const Card = ({ id, base64, name, price, retailPrice }) => {
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
					<div className={styles.pricediv}>Rs.<span>{price}</span>&ensp;<span id={styles.strike}>Rs.<span>{retailPrice}</span></span>&ensp;
						<span className={styles.discspan}>(<span>50</span>% off)</span>
					</div>
				</div>
				<div className={styles.buttondiv}>
					<div id={styles.delete}><button>Delete</button></div>
					<div id={styles.edit}><button>Edit</button></div>
				</div>
			</div>
		</>
	)
}
export default Card;