import React from 'react'
import { SmallTitle } from '../../components/titles/Titles'
import styles from "./Section2.module.scss"
import { BsShop, BsLaptop, BsPencil, BsFlag } from "react-icons/bs";
function Section2() {
    const title = "What I do";



    const textBlocks = [
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ",
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    ];
    return (

        <section >
            <SmallTitle title="What I do" />

            <div className={styles.moreInfoContainer}>
                <div className={styles.moreInfoContainerLeft}>
                    <div className={styles.info}>
                        <span className={styles.icon}><BsShop /></span>
                        <h4>Header 1</h4>
                        <p className={styles.description}>
                            {textBlocks[0]}
                        </p>
                    </div>

                    <div className={styles.info}>
                        <span className={styles.icon}><BsLaptop /></span>
                        <h4>Header 2</h4>
                        <p className={styles.description}>
                            {textBlocks[1]}
                        </p>
                    </div>
                </div>

                <div className={styles.moreInfoContainerRight}>
                    <div className={styles.info}>
                        <span className={styles.icon}><BsPencil /></span>
                        <h4>Header 3</h4>
                        <p className={styles.description}>
                            {textBlocks[2]}
                        </p>
                    </div>

                    <div className={styles.info}>
                        <span className={styles.icon}><BsFlag /></span>
                        <h4>Header 4</h4>
                        <p className={styles.description}>
                            {textBlocks[3]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2