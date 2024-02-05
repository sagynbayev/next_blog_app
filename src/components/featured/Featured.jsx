import React from "react";
import styles from "./Featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><b>Hey, guys!</b> Discover stories and creative ideas here.</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src={"/p1.jpeg"} alt={""} fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        United Kingdoms
                    </h1>
                    <p className={styles.postDesc}>
                        Never forget who you are. The rest of the world wont. Wear it like an armor and it can never be
                        used against you.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}
export default Featured
