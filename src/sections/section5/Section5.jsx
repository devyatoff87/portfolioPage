import styles from "./Section5.module.scss";
import React from 'react'
import { SmallTitle } from "../../components/titles/Titles";
import { BsHeart, BsClock, BsStar } from "react-icons/bs"
function Section5() {
    return (
        <section className={styles.section5}>
            <SmallTitle title="Fun fucts" />
            <div className={styles.factsContainer}>
                <div className={styles.factContainer}>
                    <BsHeart className={styles.icon} />
                    <h2>Happy Clients</h2>
                    <h3>578</h3>
                </div>
                <div className={styles.factContainer}>
                    <BsClock className={styles.icon} />
                    <h2>Working hours</h2>
                    <h3>128</h3>
                </div>
                <div className={styles.factContainer}>
                    <BsStar className={styles.icon} />
                    <h2>Awards won</h2>
                    <h3>6</h3>
                </div>
            </div>
        </section>
    )
}

export default Section5