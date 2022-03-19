import React from 'react'
import styles from "./Slide.module.scss";
import { IoMdQuote } from "react-icons/io";

function Slide({ info }) {
    return (
        <div className={styles.sliderContent}>
            <div className={styles.person}>
                <img src={info.imgSrc} alt="person" />
            </div>
            <p>{info.quote}</p>
            <div className={styles.quote}>
                <div className={styles.name}>
                    <h4>{info.name}</h4>
                    <h4>{info.company}</h4>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <IoMdQuote className={styles.icon} />
            </div>
        </div>
    )
}

export default Slide