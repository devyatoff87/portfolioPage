import React from 'react'
import { SmallTitle } from '../../components/titles/Titles'
import styles from "./Section2.module.scss"

function Section2(props) {
    const [h1, h2, h3, h4] = props.headers;
    const [par1, par2, par3, par4] = props.textBlocks;
    const [icon1, icon2, icon3, icon4] = props.icons
    return (

        <section >
            <SmallTitle title={props.title} />

            <div className={styles.moreInfoContainer}>
                <div className={styles.moreInfoContainerLeft}>
                    <div className={styles.info}>
                        <span className={styles.icon}>{icon1}</span>
                        <h4>{h1}</h4>
                        <p className={styles.description}>
                            {par1}
                        </p>
                    </div>

                    <div className={styles.info}>
                        <span className={styles.icon}>{icon2}</span>
                        <h4>{h2}</h4>
                        <p className={styles.description}>
                            {par2}
                        </p>
                    </div>
                </div>

                <div className={styles.moreInfoContainerRight}>
                    <div className={styles.info}>
                        <span className={styles.icon}>{icon3}</span>
                        <h4>{h3}</h4>
                        <p className={styles.description}>
                            {par3}
                        </p>
                    </div>

                    <div className={styles.info}>
                        <span className={styles.icon}>{icon4}</span>
                        <h4>{h4}</h4>
                        <p className={styles.description}>
                            {par4}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2