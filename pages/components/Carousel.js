import React, { useState } from "react";
import styles from "../../styles/Carousel.module.css"
import { SlArrowLeft,SlArrowRight } from "react-icons/sl"

export default function Carousel({data}){
    const [slide, setSlide] = useState(0);
    const nextSlide = ()=>{
        setSlide(slide===data["slides"].length-1?0:slide+1);
    }
    const prevSlide = ()=>{
        setSlide(slide===0?data["slides"].length-1:slide-1);
    }
    return (
        <div className={styles.carousel}>
            <SlArrowLeft onClick={prevSlide} className={`${styles.arrow} ${styles.arrow_left}`}/>
            <div className={styles.slide}>
                {data["slides"].map((item,idx)=>(
                    <div className={styles.slider} style={{transform: `translateX(-${slide * 100}%)`}} key={idx}>
                        <img src={item.src} alt={item.alt}/>
                    </div>
                ))}
            </div>
            <SlArrowRight onClick={nextSlide} className={`${styles.arrow} ${styles.arrow_right}`}/>
            <span className={styles.indicators}>
                {data["slides"].map((_, idx)=>{
                        return (
                        <button key={idx} onClick={()=>setSlide(idx)} className={slide === idx? styles.indicator : styles.indicator_inactive}></button>
                    );
                })}
            </span>
        </div>
    );
};