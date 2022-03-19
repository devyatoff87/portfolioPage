import React from 'react'
import styles from "./Navbar.module.scss"

import ListItemLink from '../list-item-link/ListItemLink';
import mainNavLinks from "../../data/json/mainNavLinks.json"
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFolderAdd,
    AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiBook } from "react-icons/fi";

function Navbar() {
    const iconsArrayNav = [
        <AiOutlineHome />,
        <AiOutlineUser />,
        <AiOutlineFolderAdd />,
        <AiOutlineMail />,
        <FiBook />,
        <HiOutlineDocumentText />
    ]
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    {mainNavLinks.map((link, i) => <ListItemLink Icon={iconsArrayNav[i]} name={link.name} url={link.url} key={i} />)}
                </ul>

            </nav>
        </div>
    )
}

export default Navbar