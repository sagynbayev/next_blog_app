"use client"
import React, {useContext} from "react";
import styles from "./ThemeToggle.module.css"
import Image from "next/image";
import {ThemeContext} from "@/context/ThemeContext";

const ThemeToggle = () => {

    const {theme, toggle} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle}
             style={theme === "dark"
                 ? {background: "white"}
                 : {background: "#0F172A"}}>
            <Image src={"/moon.png"} alt={"toggle"} width={14} height={14}/>
            <div className={styles.ball}
                 style={theme === "dark"
                     ? {left: 1, background: "#0F172A"}
                     : {right: 1, background: "white"}}></div>
            <Image src={"/sun.png"} alt={"toggle"} width={14} height={14}/>
        </div>
    )
}
export default ThemeToggle
