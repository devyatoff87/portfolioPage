import React from 'react'
import Slider from 'react-slick/lib/slider';
import styles from "./Section3.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../../components/slide/Slide"
import { SmallTitle } from '../../components/titles/Titles';
import {
    People, Logos, TestimonialsSliderSettings, ClientSliderSetting
} from "../../settings/sliderSettings"

function Section3() {


    return (
        <section>
            <SmallTitle title="My clients" />
            <Slider  {...TestimonialsSliderSettings} >
                {
                    People.map((person, i) => {
                        return (
                            <div key={i}>
                                <Slide
                                    info={{
                                        imgSrc: person,
                                        quote: "Ast labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                                            + "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                                        name: "Robert",
                                        company: "Google"
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default Section3