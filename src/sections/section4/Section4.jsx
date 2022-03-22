import styles from "./Section4.module.scss";
import React from 'react'
import { SmallTitle } from "../../components/titles/Titles"
import { ClientSliderSetting, Logos } from "../../settings/sliderSettings"
import Slider from "react-slick/lib/slider";

function Section4() {

    return (
        <section className={styles.section4}>
            <SmallTitle title="Client" />
            <Slider {...ClientSliderSetting}>
                {Logos.map((brand, i) => {
                    return (
                        <div key={i}>
                            <div key={i} className={styles.brandContainer}>
                                <img src={brand} alt="brand" />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}

export default Section4