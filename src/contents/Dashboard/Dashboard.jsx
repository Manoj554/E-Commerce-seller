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
// import {Chart} from 'react-chartjs-2';
// import { Chart as ChartJS, registerables, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from 'chart.js';
// import { Chart } from 'react-chartjs-2';
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//     );
import styles from './dashboard.module.css';

//data for bar chart
const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Sales/ month",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
        },
    ],
};

const Dashboard = () => {
    return (
        <>
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
                <div className={styles.Graph}>
                    Graph
                    {/* <Chart data={data} width={400} height={400} /> */}
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
            {/* <div className={styles.container3}>
                <div className={styles.RecentOrders}>Recent Orders</div>
            </div> */}
        </>
    )
}

export default Dashboard