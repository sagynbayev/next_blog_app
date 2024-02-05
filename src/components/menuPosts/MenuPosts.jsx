import React from "react";
import styles from "./MenuPosts.module.css"
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage}) => {
    return (
        <div className={styles.items}>
            <Link href={""} className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src={"/p1.jpeg"} alt={""} fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>All dwarfs are bastards in their fathers eyes</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={""} className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src={"/p1.jpeg"} alt={""} fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>To the well-organized mind, death is but the next great adventure.</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={""} className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src={"/p1.jpeg"} alt={""} fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food </span>
                    <h3 className={styles.postTitle}>Oh year... the Elder Blood can be fiery</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href={""} className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src={"/p1.jpeg"} alt={""} fill className={styles.image}/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>Damn, Eskel... you got an hourglass figure</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default MenuPosts
