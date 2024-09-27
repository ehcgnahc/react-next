import React from "react";
import styles from "../../styles/Carousel.module.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

export default function Carousel({data}){
    console.log(data)
    return (
        <div className={styles.Carousel}>
            <BsArrowLeftCircleFill className={`${styles.arrow} ${styles.arrow-left}`}/>
            {data["slides"].map((item,idx)=>{
                return (
                    <img src={item.src} alt={item.alt} key={idx} className={Styles.slide}/>
                );
            })}
            <BsArrowRightCircleFill className={`${styles.arrow} ${styles.arrow-right}`}/>
            <span className={styles.indicators}>
                {
                    data["slides"].map((_, idx)=>{
                        return (<button key={idx} onClick={null}></button>);
                    })
                }
            </span>
        </div>
    );
};