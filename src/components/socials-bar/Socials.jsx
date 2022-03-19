import React from 'react'
import styles from "./Socials.module.scss";
import { Link } from 'react-router-dom';
import {
    FaLinkedinIn,
    FaFacebookF,
    FaTwitter,
} from "react-icons/fa";

function Socials() {
    return (
        <div className={styles.socials}>
            <Link to="#">
                <FaLinkedinIn />
            </Link>
            <Link to="#">
                <FaFacebookF />
            </Link>
            <Link to="#">
                <FaTwitter />
            </Link>
        </div>
    )
}

export default Socials