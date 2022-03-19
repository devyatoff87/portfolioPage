import styles from "./Home.module.scss";
import React from 'react'
import PageContainer from "../../components/page-container/PageContainer";

function Home() {
    return (
        <PageContainer classOption={styles.home}>
            <h1>Home</h1>
            <h2>Frontend</h2>
        </PageContainer>
    )
}

export default Home