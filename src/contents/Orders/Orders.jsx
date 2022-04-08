import React from 'react'
import Link from 'next/link';
import {FaSortUp} from 'react-icons/fa';
import {FaSortDown} from 'react-icons/fa';
import styles from './orders.module.css';
const Orders = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.container}>
                <ul className={styles.headercontent}>
                    <li id={styles.allorders}>
                        {/* <Link href="/allorders"> */}
                            <a>All orders</a>
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link href="/orders"> */}
                        <a>Completed</a>
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link href="/categories"> ` */}
                        <a>Pending</a>
                        {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link href="/products"> */}
                        <a>Cancel</a>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
            <div className={styles.tablecontainer}>
                <table>
                    <tr>
                        <th>
                            Serial No:
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>
                        </th>
                        <th>
                            Order ID
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>
                        </th>
                        <th>
                            Product Name
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>
                        </th>
                        <th>
                            Address
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>
                        </th>
                        <th>
                            Date
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>
                        </th>
                        <th>
                            Price
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>
                        </th>
                        <th>
                            Status
                            <div className={styles.sortupicon}><FaSortUp /></div>
                            <div className={styles.sortdownicon}><FaSortDown /></div>

                        </th>
                    </tr>
                    <tr className={styles.rowcontainer}>
                        <td id={styles.SerialNo}>1</td>
                        <td id={styles.OrderID}>RHFA2547851</td>
                        <td id={styles.ProductName}>
                            <div className={styles.prdctimg}>
                                <img src="user.jpg" />
                                <span>Smart watch</span>
                            </div>
                        </td>
                        <td>351 Shearwood Forest Drive</td>
                        <td>20/03/2021</td>
                        <td>Rs. 376.25</td>
                        <td><div className={styles.statusgreen}>Complete</div></td>
                    </tr>
                    <tr className={styles.rowcontainer}>
                        <td id={styles.SerialNo}>2</td>
                        <td id={styles.OrderID}>RHFA2547851</td>
                        <td id={styles.ProductName}>
                            <div className={styles.prdctimg}>
                                <img src="user.jpg" />
                                <span>Smart watch fsefsehfsvhjhjkjk</span>
                            </div>
                        </td>
                        <td>351 Shearwood Forest Drive</td>
                        <td>20/03/2021</td>
                        <td>Rs. 376.25</td>
                        <td><div className={styles.statusyellow}>Pending</div></td>
                    </tr>
                    <tr className={styles.rowcontainer}>
                        <td id={styles.SerialNo}>3</td>
                        <td id={styles.OrderID}>RHFA2547851</td>
                        <td id={styles.ProductName}>
                            <div className={styles.prdctimg}>
                                <img src="user.jpg" />
                                <span>Smart watch</span>
                            </div>
                        </td>
                        <td>351 Shearwood Forest Drive</td>
                        <td>20/03/2021</td>
                        <td>Rs. 376.25</td>
                        <td><div className={styles.statusred}>Cancelled</div></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Orders