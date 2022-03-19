import React from 'react'
import styles from "./InfoList.module.scss"

function KeyValueList({ dataArr }) {
    return (
        <ul className={styles.infoList}>
            {
                dataArr.map((item, i) => {
                    return (
                        <li key={i}>
                            <span>{item[0]}</span>
                            <span>{item[1]}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default KeyValueList