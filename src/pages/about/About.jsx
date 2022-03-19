import styles from "./About.module.scss";
import React from 'react'
import PageContainer from "../../components/page-container/PageContainer";
import Section1 from "../../sections/section1/Section1";
import Section2 from "../../sections/section2/Section2";
import personInfo from "../../data/json/personInfo.json";
import useObjectToArray from "../../customHooks/useObjectToArray";
import { BsShop, BsLaptop, BsPencil, BsFlag } from "react-icons/bs";
function About() {

    const title1 = "About me"
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam in quo magni adipisci ut minima quidem aliquam nisi beatae modi, cupiditate exercitationem, laudantium quos autem dolorem sed aut labore omnis!"
    const personArr = useObjectToArray(personInfo.devyatoff);

    const title2 = "What I do"
    const headers = ["header1", "header2", "header3", "header4"]
    const textBlocks = [
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ",
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
    ];
    const icons = [<BsShop />, <BsLaptop />, <BsPencil />, <BsFlag />]


    return (
        <PageContainer >
            <Section1 title={title1} text={text} dataArr={personArr}></Section1>
            <Section2 title={title2} headers={headers} textBlocks={textBlocks} icons={icons}></Section2>
        </PageContainer>
    )
}

export default About