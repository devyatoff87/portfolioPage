import React from 'react'
import KeyValueList from '../../components/key-value-list/KeyValueList'
import { BigTitle } from '../../components/titles/Titles'
import styles from "./Section1.module.scss"

function Section1({ title, text, dataArr }) {
    return (
        <section className={styles.sectionTwoClm}>
            <BigTitle title={title} />
            <div className={styles.info}>
                <p>{text}</p>
                <KeyValueList dataArr={dataArr} />
            </div>
        </section>

    )
}

export default Section1