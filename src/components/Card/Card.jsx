import React from 'react'
import styles from './Card.module.css';

const Card = () => {
  return (
    <>
       <div className={styles.card}>
		    <div className={styles.imgdiv}>
			    <img src="signup2.jpg"/>
		    </div>
		    <div className={styles.descdiv}>
			    <div className={styles.branddiv}>US Polo Association</div>
			    <div className={styles.typediv}>Men's T-Shirt Pure cotton polo</div>
			    <div className={styles.pricediv}>Rs.290/- 
				    <span className={styles.discspan}>(50% off)</span>
			    </div>
		    </div>
	    </div> 
    </>
  )
}

export default Card