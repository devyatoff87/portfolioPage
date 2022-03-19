import styles from "./Contact.module.scss";
import React from 'react'
import PageContainer from "../../components/page-container/PageContainer";

function Contact() {
    return (
        <PageContainer classOption={styles.contact}>
            <h1>Contact</h1>
            <h2>Frontend</h2>
        </PageContainer>
    )
}

export default Contact