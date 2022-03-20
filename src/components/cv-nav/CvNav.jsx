import React, { useContext } from 'react'
import AppStore from "../../context/appStore"
import { closeCv_ActionFn } from "../../context/appActions"
import ListItemLink from '../list-item-link/ListItemLink';
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiBook } from "react-icons/fi";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFolderAdd,
    AiOutlineMail,
} from "react-icons/ai";
import mainNavLinks from "../../data/mainNavLinks.json"
import styles from "./CvNav.module.scss"

function CvNav() {
    const context = useContext(AppStore)
    const { dispatch } = context;
    const iconsArrayNav = [
        <AiOutlineHome />,
        <AiOutlineUser />,
        <AiOutlineFolderAdd />,
        <AiOutlineMail />,
        <FiBook />,
        <HiOutlineDocumentText />
    ]
    return (
        <ul className={styles.nav2}>
            {mainNavLinks.map((link, i) =>
                <ListItemLink
                    onClickCallback={() => dispatch(closeCv_ActionFn())}
                    Icon={iconsArrayNav[i]}
                    name={link.name}
                    url={link.url}
                    key={i}
                />)}
        </ul>
    )
}

export default CvNav