import React from 'react'
import styles from './bar.module.css';
const Bar = (props) => {
    const { label, height, fill, fillOpacity, value} = props
    return (
        <div className={styles.bardiv}>
            <p>{value}</p>
            <svg width="55" height={height} fill="none" viewBox={`0 0 55 ${height}`} xmls="htttp://www.w3.org/2000/svg">
                <rect width="55" height={height} fill={fill} fillOpacity={fillOpacity}/>
            </svg>
            <p>{label}</p>
        </div>
    )
}
Bar.defaultProps = {
    label: 'Label',
    height: '100vw',
    fillOpacity: "0.6"
}
export default Bar