import React from 'react'
import styles from './Card.module.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import {RiEdit2Fill} from "react-icons/ri";

const Card = () => {
  return (
    <>
       <div className={styles.card}>
		    <div className={styles.imgdiv}>
			    <img src="shoe.jpg"/>
		    </div>
		    <div className={styles.descdiv}>
			    <div className={styles.branddiv}>NIKE</div>
			    <div className={styles.typediv}>Men Blue Flex Control Training Shoes </div>
			    <div className={styles.pricediv}>Rs.<span>12,343</span>&ensp;<span id={styles.strike}>Rs.<span>15,999</span></span>&ensp;
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

export default Card