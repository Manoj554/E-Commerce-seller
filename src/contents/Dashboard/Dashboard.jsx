import React from 'react'
import { MdOutlineCameraAlt } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';
import { BsBag } from 'react-icons/bs';
import { BsBagCheck } from 'react-icons/bs';
import { BsWallet2 } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiUpArrowAlt } from 'react-icons/bi';
import { BiDownArrowAlt } from 'react-icons/bi';
import { AiOutlineReload } from 'react-icons/ai';
import styles from './dashboard.module.css';
import BarGraph from '../../components/BarGraph/BarGraph';

const Dashboard = () => {
    return (
        <>

            <div className={styles.maincontainer}>
                <div className={styles.container}>
                    <div className={styles.Products}>
                        <span><MdOutlineCameraAlt size={30} /></span>
                        <p>Products</p>
                        <p><AiOutlinePlus /> 28</p>
                    </div>
                    <div className={styles.Users}>
                        <span><RiUserLine size={30} /></span>
                        <p>Users</p>
                        <p><BiUpArrowAlt /> 1238</p>
                    </div>
                    <div className={styles.PendingOrders}>
                        <span><BsBag size={30} /></span>
                        <p>Pending Orders</p>
                        <p><BiDownArrowAlt /> 4582</p>
                    </div>
                    <div className={styles.TotalOrders}>
                        <span><BsBagCheck size={30} /></span>
                        <p>Total Orders</p>
                        <p><BiUpArrowAlt /> 10225</p>
                    </div>
                    <div className={styles.TotalProfit}>
                        <span><BsWallet2 size={30} /></span>
                        <p>Total Profit</p>
                        <p><BiUpArrowAlt /> 5.6M</p>
                    </div>
                </div>
                <div className={styles.container2}>
                    <div className={styles.Graphcontainer}>
                        <div className={styles.heading}>PRODUCT SALES</div>
                        <div className={styles.graphdiv}><BarGraph /></div>
                    </div>
                    <div className={styles.RecentBuyers}>
                        <div className={styles.heading}>RECENT BUYERS</div>
                        <div className={styles.reload}>
                            <AiOutlineReload />
                        </div>
                        <div className={styles.Buyer}>
                            <img src="user.jpg" />
                            <p>Kristopher Candy</p>
                            <span className={styles.buyeritem1}>electronics</span>
                            <span className={styles.buyeritem2}>dress</span>
                            <div className={styles.Buyerbill}>Rs 1254</div>
                        </div>
                        <div className={styles.Buyer}>
                            <img src="user.jpg" />
                            <p>Kristopher Candy</p>
                            <span className={styles.buyeritem1}>electronics</span>
                            <span className={styles.buyeritem2}>dress</span>
                            <div className={styles.Buyerbill}>Rs 1254</div>
                        </div>
                        <div className={styles.Buyer}>
                            <img src="user.jpg" />
                            <p>Kristopher Candy</p>
                            <span className={styles.buyeritem1}>electronics</span>
                            <span className={styles.buyeritem2}>dress</span>
                            <div className={styles.Buyerbill}>Rs 1254</div>
                        </div>
                        <div className={styles.Buyer}>
                            <img src="user.jpg" />
                            <p>Kristopher Candy</p>
                            <span className={styles.buyeritem1}>electronics</span>
                            <span className={styles.buyeritem2}>dress</span>
                            <div className={styles.Buyerbill}>Rs 1254</div>
                        </div>
                        <div className={styles.Buyer}>
                            <img src="user.jpg" />
                            <p>Kristopher Candy</p>
                            <span className={styles.buyeritem1}>electronics</span>
                            <span className={styles.buyeritem2}>dress</span>
                            <div className={styles.Buyerbill}>Rs 1254</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard