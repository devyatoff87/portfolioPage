import React from 'react'
import KeyValueList from '../../components/key-value-list/KeyValueList'
import { BigTitle } from '../../components/titles/Titles'
import useObjectToArray from '../../customHooks/useObjectToArray'
import styles from "./Section1.module.scss"
import personInfo from "../../data/personInfo.json";

function Section1() {

    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam in quo magni adipisci ut minima quidem aliquam nisi beatae modi, cupiditate exercitationem, laudantium quos autem dolorem sed aut labore omnis!"
    const dataArr = useObjectToArray(personInfo.devyatoff);


    return (
        <section className={styles.sectionTwoClm}>
            <BigTitle title="About me" />
            <div className={styles.info}>
                <p>{text}</p>
                <KeyValueList dataArr={dataArr} />
            </div>
        </section>

    )
}

export default Section1