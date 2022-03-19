import React from 'react'
import styles from "./ListItemLink.module.scss"
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';


function ListItemLink({ name, url, Icon, onClickCallback = null }) {
    return (
        <li className={styles.listItem} >
            <NavLink
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                to={url}
                onClick={onClickCallback}
            >
                <h3>{name}</h3>
                {Icon}

            </NavLink>
        </li >
    )
}

ListItemLink.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    Icon: PropTypes.object
};

ListItemLink.defaultProps = {
    url: "/",
    name: "Link name",
    Icon: {}
};



export default ListItemLink