import styles from "./Blog.module.scss";
import React from 'react'
import PageContainer from "../../components/page-container/PageContainer";

function Blog() {
    return (
        <PageContainer classOption={styles.blog}>
            <h1>Blog</h1>
            <h2>Frontend</h2>
        </PageContainer>
    )
}

export default Blog