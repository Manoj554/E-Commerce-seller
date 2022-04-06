import React from 'react'
import styles from './productdesc.module.css';
import { BsCart3 } from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";

const Productdesc = () => {
  return (
    <>
        <div className={styles.maindiv}>
            <div className={styles.productdescbox}>
                <div className={styles.description}>

                    <div>
                        <p className={styles.brand}>NIKE</p>
                    </div>
                
                    <div>
                        <h1 className={styles.productname}>
                            Nike Men's Metcon 6 Black Dark Cayenne DJ3018-016 
                        </h1>
                        <div className={styles.ratingdiv}>
                            <span id="starrating">4.3</span>
                            <span className={styles.star}><AiFillStar/></span> 
                            <span className={styles.line}></span> 
                            <span id="ratings">133</span>ratings
                        </div>
                
                    </div>

                    <div>
                    <h2 className={styles.price}>Rs. 13,300/- &emsp;<span className={styles.discount}>(50% off)</span></h2>
                    </div>

                    <h2>Description</h2>
                    <div className={styles.desctxt}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, est culpa, unde fugiat sapiente maiores ad sunt nam odit non facere quam autem magni ab nostrum iusto esse minima voluptatibus?
                    </div>
                    <div className={styles.buttondiv}>
                        <div className={styles.cart}>
                            <button ><BsCart3/> Add to Cart</button>
                        </div>
                        <div className={styles.wish}>
                            <button><AiFillHeart/> Wishlist</button>
                        </div>
                    </div>
                </div>

                <div className={styles.prodimg}>
                        <img src="nike.png" width="100%" height="100%"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Productdesc