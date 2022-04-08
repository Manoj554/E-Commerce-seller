import React from 'react';
import Bar from './Bar';
import styles from './bar.module.css';

const BarGraph = (props) => {
    const { data } = props
    let barArray = []
    Object.keys(data).forEach((key) => {
        barArray.push(
            // <Bar label={key} fill={'blue'} height={`${(data[key] / sum(Object.values(data)))*100}vw`}/>
            <Bar label={key} height={`${(data[key] / sum(Object.values(data)))*100}vw`}/>
        )
    })
    return (
        <div className={styles.bargraphdiv}>
            {barArray}
        </div>
    )
}
function sum(data) {
    return data.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
BarGraph.defaultProps = {
    data: {
        January: 10000,
        February: 2000,
        March: 4520,
        April: 45278,
        May: 47822,
        June: 4522,
        July: 7000,
        August: 25004,
        September: 47850,
        October: 4520,
        November: 52452,
        December: 45785,
    },
}
export default BarGraph