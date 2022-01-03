import React from "react";
import styles from '../Header/Header.module.scss'
import Image from 'next/image'
import PaulImage from '../pics/img_1.JPG';
import Link from 'next/link'

export default function Header() {

    return (
        <div>
            <div className={styles.languages}>
                <a href="/">EN</a>
                <p>&nbsp;</p>
                <a href="/">TH</a>
            </div>
            <div>
                <div className={styles.nameTop}>
                    <div >
                        <Link href="/" >
                            <a className={styles.paul}>
                                <Image
                                    className={styles.paul}
                                    src={PaulImage}
                                    alt="Paul's image"
                                />
                            </a>
                        </Link>
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

        </div>
    )

}
