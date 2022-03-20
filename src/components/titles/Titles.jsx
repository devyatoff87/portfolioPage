import React from 'react'
import { useFirstWord } from '../../customHooks/useFirstWord'
import styles from "./Titles.module.scss"

function BigTitle({ title }) {

    const { firstWord, restOfStr } = useFirstWord(title)

    return (
        <div className={styles.bigTitle}>
            <h2>{firstWord}
                <span>{restOfStr}</span>
            </h2>
        </div>
    )
}

function SmallTitle({ title }) {

    const { firstWord, restOfStr } = useFirstWord(title)

    return (
        <div className={styles.smallTitle}>
            <h3>{firstWord}
                <span>{restOfStr}</span>
            </h3>
        </div>
    )
}

export { BigTitle, SmallTitle } 