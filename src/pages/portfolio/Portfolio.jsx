import styles from "./Portfolio.module.scss";
import React from 'react'
import PageContainer from "../../components/page-container/PageContainer";

function Portfolio() {
    return (
        <PageContainer classOption={styles.portfolio}>
            <h1>Portfolio</h1>
            <h2>Frontend</h2>
        </PageContainer>
    )
}

export default Portfolio