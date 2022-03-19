import React from 'react'
import styles from "./PageContainer.module.scss"

function PageContainer({ children, classOption }) {
    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${classOption}`}>{children}</div>
        </div>
    )
}

export default PageContainer