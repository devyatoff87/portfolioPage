import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SmoothAnm_hoc({ children }) {

    const [opacity, setOpacity] = useState(() => 0);
    const [transition, setTransition] = useState(() => 0)
    const [visible, setVisible] = useState(() => "hidden")

    const location = useLocation();

    const styles = {
        overflowY: "scroll",
        width: 100 + "%",
        transition: transition + "s",
        opacity: opacity,
        visibility: visible
    }

    useEffect(() => {
        setTimeout(() => {
            setTransition((prev) => prev = 0.5)
            setVisible((prev) => prev = "visible")
            setOpacity((prev) => prev = 1)
        }, 300)

        return () => {
            setVisible((prev) => prev = "hidden")
            setTransition((prev) => prev = 0)
            setOpacity((prev) => prev = 0)
        }
    }, [location.pathname])

    return (
        <div style={{ ...styles }}>
            {!opacity ? null : children}
        </div>
    )
}

export default SmoothAnm_hoc