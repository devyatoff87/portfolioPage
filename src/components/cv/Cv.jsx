import React, { useContext } from 'react'
import styles from "./Cv.module.scss"
import avatar from "../../assets/Avatar.png";
import CvNav from '../cv-nav/CvNav';
import {
    FaTimes,
    FaBars,
} from "react-icons/fa";
import Socials from '../socials-bar/Socials';
import useClickOutside from '../../customHooks/useOutsideClick';
import { toggleCv_ActionFn, closeCv_ActionFn } from "../../context/appActions"
import AppContext from '../../context/appStore';

function Cv() {
    const domNode = useClickOutside(() => {
        dispatch(closeCv_ActionFn())
    });

    const context = useContext(AppContext)
    const { state, dispatch } = context
    const isNavOpen = state.cvShow

    return (
        <div className={styles.container}>
            {/* BURGER */}
            <div className={styles.burgerContainer}
                onClick={() => dispatch(toggleCv_ActionFn())} >
                <FaBars />
            </div>

            {/* CONTENT */}
            <div ref={domNode} className={`${styles.content} ${isNavOpen ? styles.active : ""}`} >
                {/* CLOSE BURGER */}
                <div className={styles.burgerContainer} onClick={() => dispatch(closeCv_ActionFn())}>
                    <FaTimes />
                </div>

                <div className={styles.imageContainer}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.moreInfo}>
                    <h2>My Name</h2>
                    <h3>Web Designer</h3>
                    <CvNav />
                    <Socials />
                </div>
                <div className={styles.copyright}>
                    <span>© 2020 All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Cv