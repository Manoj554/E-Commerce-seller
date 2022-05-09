import React from 'react'
import Link from 'next/link';
import { FaSortUp } from 'react-icons/fa';
import { FaSortDown } from 'react-icons/fa';
import styles from './orders.module.css';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const Orders = () => {
    const { loading, orders } = useSelector(state => state.order);

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
            {loading && <Loader />}
            <div className={styles.tablecontainer}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Serial No:
                            </th>
                            <th>
                                Order ID
                            </th>
                            <th>
                                Product Name & Quantity
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Status

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 && (
                            orders.map((val, index) => (
                                <tr key={val.id} className={styles.rowcontainer}>
                                    <td id={styles.SerialNo}>{index + 1}</td>
                                    <td id={styles.OrderID}>{val.orderId}</td>
                                    <td id={styles.ProductName}>
                                        {
                                            val.productDetails.map((pd) => {
                                                return (
                                                    pd.productName + ' X ' + pd.qty + ', '
                                                )
                                            })
                                        }
                                    </td>
                                    <td>{val.deliveryAddress?.address}</td>
                                    <td>{val.date}</td>
                                    <td>₹ {val.orderAmount}</td>
                                    <td><div className={styles.statusgreen}>{val.orderStatus}</div></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                    {/* <tr className={styles.rowcontainer}>
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
                    </tr> */}
                </table>
            </div>
        </div>
    )
}

export default Orders