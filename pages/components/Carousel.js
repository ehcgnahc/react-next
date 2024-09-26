import React from "react";
import Styles from "../../styles/Carousel.module.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

export default function Carousel({data}){
    console.log(data)
    return (
        <div className={Styles.Carousel}>
            <BsArrowLeftCircleFill/>
            {data.map((item,idx)=>{
                return (
                    <img src={item.src} alt={item.alt} key={idx} className={Styles.slide}/>
                );
            })}
            <BsArrowRightCircleFill/>
        </div>
    );
};