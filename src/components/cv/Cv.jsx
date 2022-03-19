import React, { useState } from 'react'
import styles from "./Cv.module.scss"
import avatar from "../../assets/Avatar.png";
import ListItemLink from '../list-item-link/ListItemLink';
import {
    FaLinkedinIn,
    FaFacebookF,
    FaTwitter,
    FaTimes,
    FaBars,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiBook } from "react-icons/fi";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFolderAdd,
    AiOutlineMail,
} from "react-icons/ai";
import mainNavLinks from "../../data/json/mainNavLinks.json"
import Socials from '../socials-bar/Socials';
import useClickOutside from '../../customHooks/useOutsideClick';

function Cv() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const domNode = useClickOutside(() => {
        setIsNavOpen(false);
    });

    const iconsArrayNav = [
        <AiOutlineHome />,
        <AiOutlineUser />,
        <AiOutlineFolderAdd />,
        <AiOutlineMail />,
        <FiBook />,
        <HiOutlineDocumentText />
    ]
    const onClickHandle = () => {
        console.log("click");
    }
    return (
        <div className={styles.container}>
            {/* BURGER */}
            <div className={styles.burgerContainer}
                onClick={() => setIsNavOpen(true)} >
                <FaBars />
            </div>

            {/* CONTENT */}
            <div ref={domNode} className={`${styles.content} ${isNavOpen ? styles.active : ""}`} >
                {/* CLOSE BURGER */}
                <div className={styles.burgerContainer} onClick={() => setIsNavOpen(false)}>
                    <FaTimes />
                </div>

                <div className={styles.imageContainer}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.moreInfo}>
                    <h2>My Name</h2>
                    <h3>Web Designer</h3>
                    <ul className={styles.nav2}>
                        {mainNavLinks.map((link, i) => <ListItemLink onClickCallback={onClickHandle} Icon={iconsArrayNav[i]} name={link.name} url={link.url} key={i} />)}
                    </ul>
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