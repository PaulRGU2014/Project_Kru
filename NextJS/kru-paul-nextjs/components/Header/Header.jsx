import React from "react";
import styles from '../Header/Header.module.scss'
import Image from 'next/image'
import PaulImage from '../pics/img_1.JPG';

export default function Header() {

    return (
        <div>
            <div className={styles.languages}>
                <a href="">EN</a>
                <a href="">TH</a>
            </div>

            <div className={styles.nameTop}>
                <div className={styles.paul}>
                    <Image
                        src={PaulImage}
                        alt="Paul's image"
                    />
                </div>
                <div className={styles.nameTitle}>
                    <h1 className={styles.fullName}>PAUL THANATAWEENONT</h1>
                    <ul className={styles.careerTitle}>
                        <li>junior software engineer</li>
                        <li>freelance web developer</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
